import { Formik, Form } from "formik"
import { Tag } from "storage/quest"
import TagSelect from "./TagSelect"
import { useFirestore, useUser } from "reactfire"
import { doc, setDoc, collection, getDoc } from "firebase/firestore"
import { FormField } from "components/Form"
import { Box, Button, Input, Typography } from "@mui/material"
import { Stack } from "@mui/system"

interface FormValues {
  title: string
  description: string
  reward: number
  tags: string[]
}

export function AddQuest(): JSX.Element {
  const tags = Object.values(Tag).map((tag: Tag) => ({
    value: tag,
    label: tag,
  }))
  const firestore = useFirestore()
  const { data: user } = useUser()

  const onSubmit = async (values: FormValues) => {
    try {
      const questColRef = collection(firestore, "quests")
      const questRef = doc(questColRef)
      const questSnap = await getDoc(questRef)
      if (!questSnap.exists())
        await setDoc(questRef, {
          ...values,
          questId: questRef.id,
          userId: user.uid,
          status: "open",
        })
      alert("Quest Created")
    } catch (error) {
      alert("Error:" + error)
    }
  }

  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      <Typography variant="h2">Add Quest</Typography>
      <Formik
        initialValues={{
          title: "",
          description: "",
          reward: 0,
          tags: [],
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="h4">Title</Typography>
              <Input
                type="text"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
              <Typography variant="h4">Description</Typography>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
              <Typography variant="h4">Reward</Typography>
              <Input
                type="number"
                name="reward"
                onChange={handleChange}
                value={values.reward}
              />
              <Typography>Tags</Typography>
              <FormField
                name="tags"
                options={tags}
                component={TagSelect}
                isMulti={true}
              />
              <Button variant={"contained"} type="submit">
                Add Quest
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
