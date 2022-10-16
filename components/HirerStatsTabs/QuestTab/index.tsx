import { useFirestore, useUser, useFirestoreCollectionData } from "reactfire"
import { collection, query, where } from "firebase/firestore"
import { Stack, Box } from "@mui/material"
import { PendingBids } from "./PendingBids"
import { Quest } from "storage/quest"

export function QuestPanel() {
  const firestore = useFirestore()
  const { data: user } = useUser()
  const questsRef = collection(firestore, "quests")
  const userQuestsRef = query(questsRef, where("userId", "==", user?.uid || ""))
  const { status: userQuestsStatus, data: userQuests } =
    useFirestoreCollectionData(userQuestsRef)

  return (
    <Stack spacing={4}>
      {userQuestsStatus === "loading" ? (
        <Box>Loading bids</Box>
      ) : (
        userQuests?.map((quest: Quest, idx) => (
          <PendingBids key={idx} quest={quest} />
        ))
      )}
    </Stack>
  )
}
