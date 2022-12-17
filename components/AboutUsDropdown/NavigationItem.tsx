import Image from "next/image"
import Link from "next/link"
import { Grid, Stack, Typography } from "@mui/material"
import { AboutUs } from "navigation"

interface NavigationItemProps {
  navigation: AboutUs
}

export function NavigationItem({ navigation }: NavigationItemProps) {
  return (
    <Grid item xs={6}>
      <Link
        href={navigation.href}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Stack direction="row" spacing={2}>
          <Image
            src={navigation.image}
            width={30}
            height={30}
            alt={navigation.title}
          />
          <Stack>
            <Typography variant="body1" fontWeight={500} lineHeight="30px">
              {navigation.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {navigation.description}
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Grid>
  )
}
