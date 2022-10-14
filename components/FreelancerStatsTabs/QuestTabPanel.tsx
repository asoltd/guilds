import { Box, Typography, Divider } from "@mui/material"
import { useFirestore, useUser, useFirestoreCollectionData } from "reactfire"
import { collection, query, where } from "firebase/firestore"
import { AcceptedBids } from "../AcceptedBids"

interface TabPanelProps {
  index: number
  value: number
}

export function QuestTabPanel({ value, index, ...other }: TabPanelProps) {
  const firestore = useFirestore()
  const { data: user } = useUser()
  const questsRef = collection(firestore, "quests")
  const biddingQuestsQuery = query(
    questsRef,
    where("bidders", "array-contains", user?.uid || "")
  )
  const { status: biddinguestsStatus, data: biddingQuests } =
    useFirestoreCollectionData(biddingQuestsQuery)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5">Current Jobs</Typography>
          {biddinguestsStatus && (
            <>
              {biddinguestsStatus === "loading" ? (
                <Typography>loading bids</Typography>
              ) : (
                <>
                  <Divider orientation="horizontal" />
                  {biddingQuests ? (
                    biddingQuests.map((quest, idx) => (
                      <AcceptedBids
                        path={quest.id}
                        title={quest.title}
                        key={idx}
                      />
                    ))
                  ) : (
                    <Typography>no bids</Typography>
                  )}
                </>
              )}
            </>
          )}
        </Box>
      )}
    </div>
  )
}
