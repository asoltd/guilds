import MoreVertIcon from "@mui/icons-material/MoreVert"
import {
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material"
import { Card } from "components/YourCards/Card"
import { useTheme } from "@mui/material/styles"
import { cards } from "cards"

const card = {
  title: "My card",
  owner: "Example User",
  date: "06/24",
  number: "1234 1234 1234 1234",
}

export function YourCards() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Stack
      maxWidth="48rem"
      border="1px solid"
      borderRadius="1.5rem"
      borderColor={(theme) => theme.palette.grey[200]}
    >
      <Stack p={3} spacing={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" fontWeight={600}>
            Your Cards
          </Typography>
          <IconButton>
            <MoreVertIcon cursor="pointer" />
          </IconButton>
        </Stack>
        <Stack
          direction={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          spacing={2}
        >
          <Card card={card} variant={cards.salmonStripLines} />
          <Card card={card} variant={cards.gradientStripVerticalLines} />
        </Stack>
      </Stack>
      <Divider />
      <Stack p={3} spacing={3}>
        <Button
          variant="outlined"
          sx={{
            py: "0.4rem",
            textTransform: "none",
            borderColor: (theme) => theme.palette.grey[300],
            color: "text.primary",
            bgcolor: "background.default",
            borderRadius: "0.5rem",
            alignSelf: "flex-end",
            "&:hover": {
              borderColor: (theme) => theme.palette.grey[300],
            },
          }}
        >
          Menage cards
        </Button>
      </Stack>
    </Stack>
  )
}
