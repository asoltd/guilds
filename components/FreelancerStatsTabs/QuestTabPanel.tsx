import { Box, Typography } from "@mui/material"
import { ReactNode } from "react"
import { useFirestore, useUser, useFirestoreCollectionData } from "reactfire"
import { collection, query, where } from "firebase/firestore"

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

export function QuestTabPanel({
  children,
  value,
  index,
  ...other
}: TabPanelProps) {
  const firestore = useFirestore()
  const { data: user } = useUser()
  const questsRef = collection(firestore, "quests")
  const biddingQuestsQuery = query(
    questsRef,
    where("bidders", "array-contains", user?.uid || "")
  )
  const bidsRef = collection(firestore, `quests/${user?.uid}/bids`)
  const userBidsQuery = query(bidsRef, where("userId", "==", user?.uid || ""))
  const { status: userBidsStatus, data: userBids } =
    useFirestoreCollectionData(userBidsQuery)

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
          {userBidsStatus && (
            <>
              {userBidsStatus === "loading" ? (
                <Typography>loading bids</Typography>
              ) : (
                <>
                  {userBids ? (
                    userBids.map((bid, idx) => (
                      <Box key={idx}>
                        <Typography>gowno</Typography>
                      </Box>
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
