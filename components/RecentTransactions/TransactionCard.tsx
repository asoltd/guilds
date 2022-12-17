import { Avatar, Divider, Stack, Typography } from "@mui/material"
import { doc } from "firebase/firestore"
import { StorageImage, useFirestore, useFirestoreDocData } from "reactfire"
import { Transaction } from "types/hero"

interface TransactionCardProps {
  transaction: Transaction
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  const firestore = useFirestore()
  const userRef = doc(firestore, `heroes/${transaction.userId}`)
  const { status, data: user } = useFirestoreDocData(userRef)

  return (
    <Stack>
      {status === "loading" ? (
        <Typography>Loading...</Typography>
      ) : (
        <Stack
          height="5rem"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={2}>
            {user?.profilePicture ? (
              <Stack alignSelf="center">
                <StorageImage
                  storagePath={`general/${user?.profilePicture}`}
                  style={{
                    objectFit: "cover",
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                  }}
                />
              </Stack>
            ) : (
              <Avatar />
            )}
            <Stack>
              <Typography variant="body1">
                {user?.name.first + " " + user?.name.last}
              </Typography>
              <Typography
                variant="caption"
                color={(theme) => theme.palette.grey[600]}
              >
                {user?.email}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            variant="body2"
            color={transaction?.amount[0] == "-" ? "#D92D20" : "#039855"}
          >
            {transaction?.amount}
          </Typography>
        </Stack>
      )}

      <Divider />
    </Stack>
  )
}
