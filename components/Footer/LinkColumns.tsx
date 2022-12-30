import Link from "next/link"
import { Stack, Typography, Chip } from "@mui/material"
import { navigation, NavigationItem, NavigationColumn } from "./navigation"

export function FooterLink({ label, href, displayNewChip }: NavigationItem) {
  if (displayNewChip) {
    return (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ textDecoration: "none" }}
      >
        <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            {label}
          </Typography>
        </Link>
        <Chip
          variant="outlined"
          label="New"
          sx={{
            bgcolor: "text.secondary",
            color: "background.default",
            height: "1.5rem",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}
        />
      </Stack>
    )
  } else {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography
          variant="body1"
          sx={{ cursor: "pointer", width: "fit-content" }}
        >
          {label}
        </Typography>
      </Link>
    )
  }
}

export function LinkColumns() {
  return (
    <Stack direction="row">
      {navigation.map((column: NavigationColumn) => (
        <Stack
          spacing={1.5}
          color="background.default"
          width="13rem"
          key={column.title + "-link"}
        >
          <Typography
            variant="body1"
            color={(theme) =>
              theme.palette.mode == "light"
                ? "text.secondary"
                : "background.secondary"
            }
            sx={{ fontWeight: 600 }}
          >
            {column.title}
          </Typography>
          {column.navigationItem.map((navigationItem, index) => (
            <FooterLink key={index + "-footer-link"} {...navigationItem} />
          ))}
        </Stack>
      ))}
    </Stack>
  )
}
