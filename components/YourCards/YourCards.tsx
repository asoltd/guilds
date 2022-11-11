import MoreVertIcon from "@mui/icons-material/MoreVert"
import {
  Button,
  Divider,
  Stack,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material"
import { Card } from "components/YourCards/Card"
import { useTheme } from "@mui/material/styles"

export function YourCards({ card }) {
  const theme = useTheme()
  const isMedium = useMediaQuery(theme.breakpoints.down(1002))

  return (
    <Stack spacing={3} p={1}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={600}>
          Your Cards
        </Typography>
        <MoreVertIcon cursor="pointer" />
      </Stack>
      <Grid
        container
        rowGap={2}
        columnGap={2}
        justifyContent={isMedium ? "center" : "flex-start"}
      >
        {card?.map((card, idx) => (
          <Card card={card} />
        ))}
      </Grid>
      <Divider />
      <Button
        variant="outlined"
        sx={{
          borderColor: "#E5E5E5",
          color: "text.primary",
          bgcolor: "background.default",
          width: "10rem",
          borderRadius: "0.5rem",
          alignSelf: "flex-end",
        }}
      >
        Menage cards
      </Button>
    </Stack>
  )
}
