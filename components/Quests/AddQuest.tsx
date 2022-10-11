import { Formik, Form } from "formik"
import { Tag } from "storage/quest"
import TagSelect from "./TagSelect"
import { useFirestore, useUser, useStorage } from "reactfire"
import { doc, setDoc, collection, getDoc } from "firebase/firestore"
import { ref, uploadBytes } from "firebase/storage"
import { Box, Button, Input, Typography, IconButton } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import LinesEllipsis from "react-lines-ellipsis"

interface FormValues {
  title: string
  description: string
  reward: number
}

export function AddQuest(): JSX.Element {
  const [image, setImage] = useState(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const tags = Object.values(Tag).map((tag: Tag) => ({
    value: tag,
    label: tag,
  }))
  const firestore = useFirestore()
  const storage = useStorage()
  const { data: user } = useUser()

  const convertImageName = () => {
    const [imageName, imageExtension] = image.name.split(".")
    return imageName + "_420x240." + imageExtension
  }

  const handleQuestSubmit = async (values: FormValues) => {
    try {
      const questColRef = collection(firestore, "quests")
      const questRef = doc(questColRef)
      const questSnap = await getDoc(questRef)
      if (!questSnap.exists())
        await setDoc(questRef, {
          ...values,
          questId: questRef.id,
          userId: user.uid,
          tags: selectedTags,
          status: "open",
          image: convertImageName(),
        })
      alert("Quest Created")
    } catch (error) {
      alert("Error:" + error)
    }
  }

  const handleImageSubmit = () => {
    try {
      if (!image) {
        alert("Please choose a file first!")
      }
      const storageRef = ref(storage, `quests/${image?.name}`)
      const uploadTask = uploadBytes(storageRef, image)
      alert("Image Uploaded")
    } catch (error) {
      alert("Error:" + error)
    }
  }

  const onSubmit = async (values: FormValues) => {
    handleQuestSubmit(values)
    handleImageSubmit()
  }

  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      <Typography variant="h2">Add Quest</Typography>
      <Formik
        initialValues={{
          title: "",
          description: "",
          reward: 0,
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
                required={true}
              />
              <Typography variant="h4">Description</Typography>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                value={values.description}
                required={true}
              />
              <Typography variant="h4">Reward</Typography>
              <Input
                type="number"
                name="reward"
                onChange={handleChange}
                value={values.reward}
                required={true}
              />
              <Typography variant="h4">Tags</Typography>
              <TagSelect
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                options={tags}
              />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Typography variant="h4">Image</Typography>
                <Stack direction="row" spacing={2}>
                  <Stack justifyContent={"flex-end"}>
                    <LinesEllipsis
                      text={image?.name ? image.name : "No file chosen"}
                      maxLine="1"
                      ellipsis="..."
                      basedOn="letters"
                    />
                  </Stack>
                  <Button component="label" variant={"outlined"}>
                    Upload
                    <input
                      hidden
                      accept="image/png, image/jpeg"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Button>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      hidden
                      accept="image/png, image/jpeg"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <PhotoCamera />
                  </IconButton>
                </Stack>
              </Stack>
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
