import { Divider, Stack, Typography } from "@mui/material"
import { collection, query, orderBy, limit } from "firebase/firestore"
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire"
import { Transaction } from "types/hero"
import { TransactionCard } from "./TransactionCard"

export function RecentTransactions() {
  const firestore = useFirestore()
  const { data: user } = useUser()
  const transactionsRef = collection(
    firestore,
    `heroes/${user?.uid}/transactions`
  )
  const transactionsQuery = query(transactionsRef, orderBy("date"), limit(8))
  const { data: transactions } = useFirestoreCollectionData(transactionsQuery)

  return (
    <Stack
      p={3}
      sx={{
        maxWidth: "24rem",
        border: "1px solid",
        borderColor: (theme) => theme.palette.grey[200],
        borderRadius: "0.5rem",
        boxShadow: "0px 1px 3px 0px #1018281A",
      }}
    >
      <Typography pb={3} variant="h6">
        Recent Transactions
      </Typography>
      <Divider />
      <>
        {transactions?.map((transaction: Transaction, idx) => (
          <TransactionCard transaction={transaction} key={idx} />
        ))}
      </>
    </Stack>
  )
}
