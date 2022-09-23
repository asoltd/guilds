import styled from "styled-components"
import { Formik, Form, Field } from "formik"
import { useRouter } from "next/router"
import { Bid } from "storage/quest"
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
import { Title } from "./Title"
import { Caption, FormField } from "./Form"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

interface FormValues {
  amount: number
  timeEstimate: number
}

export default function AddBid(): JSX.Element {
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
          userId: user.uid,
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
    <div>
      <Title>Add Bid</Title>
      <Formik
        initialValues={{ amount: 0, timeEstimate: 0 }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Column>
              <Caption>Amount</Caption>
              <FormField type="number" name="amount" />
              <Caption>Time Estimate</Caption>
              <FormField type="number" name="timeEstimate" />
              <button type="submit">Submit</button>
            </Column>
          </Form>
        )}
      </Formik>
    </div>
  )
}
