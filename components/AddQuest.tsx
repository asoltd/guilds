import styled from "@emotion/styled"
import { Formik, Form } from "formik"
import { Tag } from "types/quest"
import TagSelect from "./TagSelect"
import { useFirestore, useUser } from "reactfire"
import { doc, setDoc, collection, getDoc } from "firebase/firestore"
import { Title } from "./Title"
import { Caption, FormField } from "./Form"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

interface FormValues {
  title: string
  description: string
  reward: number
  tags: string[]
}

export default function AddQuest(): JSX.Element {
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
    <div>
      <Title>Add Quest</Title>
      <Formik
        initialValues={{
          title: "",
          description: "",
          reward: 0,
          tags: [],
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Column>
              <Caption>Title</Caption>
              <FormField type="text" name="title" />
              <Caption>Description</Caption>
              <FormField type="text" name="description" />
              <Caption>Reward</Caption>
              <FormField type="number" name="reward" />
              <Caption>Tags</Caption>
              <FormField
                name="tags"
                options={tags}
                component={TagSelect}
                isMulti={true}
              />
              <button type="submit">Add Quest</button>
            </Column>
          </Form>
        )}
      </Formik>
    </div>
  )
}
