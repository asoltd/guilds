import Image from "next/image"
import { Button, Link, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"

export function VerifyPhoneNumber() {
  return (
    <Stack alignItems="center" spacing={2}>
      <Image
        src="/alert-circle.svg"
        width={70}
        height={70}
        alt="Alert circle"
      />
      <Typography variant="h3">Check your phone</Typography>
      <Stack alignItems="center">
        <Typography variant="h6" color="text.secondary">
          We sent a verification code to
        </Typography>
        <Typography variant="h6" color="text.secondary" fontWeight="600">
          +48 123 456 789
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <TextField></TextField>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ width: "40%" }}
      >
        Verify phone
      </Button>
      <Stack direction="row" alignItems="center">
        <Typography variant="body1" color="text.secondary">
          Didn't receive the code?
        </Typography>
        <Button variant="text" color="primary" sx={{ textTransform: "none" }}>
          Click to resend
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image src="/circle.svg" width={20} height={20} alt="Circle" />
        <Link href="/login" underline="none" color="text.primary">
          Back to login
        </Link>
      </Stack>
    </Stack>
  )
}
