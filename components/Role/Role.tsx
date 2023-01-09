import styled from "@emotion/styled"
import { Grid, Box, Stack, Typography, Button } from "@mui/material"
import LinesElipsis from "react-lines-ellipsis"
import {
  StorageImage,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Role as RoleType } from "types/team"

const RoleThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 296,
  width: 280,
})

interface RoleProps {
  role: RoleType
  teamId: string | string[]
}

export function Role({ role, teamId }: RoleProps) {
  const { title, description, image, id: roleId } = role
  const firestore = useFirestore()
  const bidsRef = collection(firestore, `teams/${teamId}/roles/${roleId}/bids`)
  const lowestBidQuery = query(bidsRef, orderBy("amount", "asc"), limit(1))
  const { data: lowestBid } = useFirestoreCollectionData(lowestBidQuery)

  const makeBid = () => {
    alert("make bid")
  }

  return (
    <Grid item xs={6} width="280px">
      <Box>
        <Stack spacing={4}>
          <RoleThumbnail storagePath={`general/${image}`} />
          <Stack spacing={1}>
            <Typography variant="h6">{title}</Typography>
            <Stack direction="row" justifyContent="space-between">
              {lowestBid && (
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, color: "primary.main" }}
                >
                  {"Lowest bid - " + lowestBid[0].amount}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Typography variant="body1">
            <LinesElipsis
              text={description}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </Typography>
          <Button
            onClick={() => makeBid()}
            variant="outlined"
            sx={{
              width: "7rem",
              height: "3rem",
              color: "text.primary",
              borderColor: (theme) => theme.palette.grey[300],
              borderRadius: "0.5rem",
              textTransform: "none",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Make a bid
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Grid>
  )
}
