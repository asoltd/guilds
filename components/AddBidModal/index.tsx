import { Formik, Form } from "formik"
import { useRouter } from "next/router"
import { useFirestore, useUser } from "reactfire"
import {
  doc,
  collection,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore"
import { Modal, Box, Stack, Typography, Button, Input } from "@mui/material"

interface FormValues {
  amount: number
  timeEstimate: number
}

export function AddBidModal({ modalOpen, setModalOpen }): JSX.Element {
  const router = useRouter()
  const { questId } = router.query
  const firestore = useFirestore()
  const { data: user } = useUser()

  const handleSubmit = async (values: FormValues) => {
    const timeEstimate = values.timeEstimate + " days"
    try {
      const bidColRef = collection(firestore, `quests/${questId}/bids`)
      const bidRef = doc(bidColRef)
      const bidSnap = await getDoc(bidRef)
      if (!bidSnap.exists())
        await setDoc(bidRef, {
          ...values,
          timeEstimate,
          questId,
          bidderId: user.uid,
          bidId: bidRef.id,
          status: "pending",
          createdAt: Timestamp.now(),
        })
      const questRef = doc(firestore, `quests/${questId}`)
      const questSnap = await getDoc(questRef)
      if (questSnap.exists()) {
        await updateDoc(questRef, {
          bidders: arrayUnion(user.uid),
        })
      }
      alert("Bid Created")
    } catch (error) {
      alert("Error:" + error)
    }
  }

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30rem",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          outline: "none",
        }}
      >
        <Formik
          initialValues={{ amount: 0, timeEstimate: 0 }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <Stack spacing={8}>
                <Typography variant="h2">Add Bid</Typography>
                <Stack spacing={2}>
                  <Typography variant="h4">Amount</Typography>
                  <Input
                    type="number"
                    name="amount"
                    value={values.amount}
                    onChange={handleChange}
                  />
                </Stack>
                <Stack spacing={2}>
                  <Typography variant="h4">Time Estimate</Typography>
                  <Input
                    type="number"
                    name="timeEstimate"
                    value={values.timeEstimate}
                    onChange={handleChange}
                  />
                </Stack>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  )
}
