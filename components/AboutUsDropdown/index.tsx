import { Grid, Menu } from "@mui/material"
import { NavigationItem } from "./NavigationItem"
import { AboutUs } from "../../navigation"

interface AboutUsDropdownProps {
  handleClose: () => void
  open: boolean
  anchorEl: null | HTMLElement
  navigations: AboutUs[]
}

export function AboutUsDropdown({
  anchorEl,
  open,
  handleClose,
  navigations,
}: AboutUsDropdownProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: -31, horizontal: "center" }}
      sx={{
        "& .MuiMenu-paper": {
          bgcolor: "background.default",
          borderRadius: "0.7rem",
          p: "1rem",
        },
      }}
    >
      <Grid
        container
        maxWidth="sm"
        columnSpacing={5}
        rowSpacing={3}
        p={"0.5rem"}
      >
        {navigations.map((navigation: AboutUs) => (
          <NavigationItem navigation={navigation} key={navigation.href} />
        ))}
      </Grid>
    </Menu>
  )
}
