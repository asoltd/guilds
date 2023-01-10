import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import {
  Stack,
  Typography,
  Grid,
  Box,
  Divider,
  Container,
  Checkbox,
  Button,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material"
import { useSigninCheck } from "reactfire"
import styled from "@emotion/styled"
import { useTheme } from "@mui/material/styles"
import { MediumUserCard } from "./UserCards"

const BoldText = styled(Typography)({
  color: "#101828",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 500,
})

const Heading = styled(Typography)({
  color: "#101828",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  fontWeight: 500,
})

const GreyText = styled(Typography)({
  color: "#667085",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 400,
})

export function BidConfirm() {
  const { data: signInCheckResult } = useSigninCheck()

  const [acceptTerms, setAcceptTerms] = useState(false)

  const [open, setOpen] = useState(false)

  const submitContract = () => {
    setOpen(true)
  }

  if (signInCheckResult) {
    return (
      <Container
        disableGutters
        sx={{ paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}
      >
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success">Contract saved.</Alert>
        </Snackbar>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <MediumUserCard
              photo={signInCheckResult.user?.photoURL}
              name="Yoni Albi"
              level="4.6/5"
              tagline="Former co-founder of Opendoor. Early staff at Spotify and
            Clearbit."
              twitter="#"
              linkedin="#"
              instagram="#"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack
              sx={{
                height: "100%",
                border: "1px solid #EAECF0",
                borderRadius: "8px",
                boxShadow:
                  "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <BoldText sx={{ paddingX: 3, paddingY: 3 }}>
                  Quests Completed
                </BoldText>
                <BoldText
                  sx={{ paddingLeft: 3, paddingRight: 10, paddingY: 2 }}
                >
                  32
                </BoldText>
              </Box>
              <Divider />
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <BoldText sx={{ paddingX: 3, paddingY: 3 }}>
                  Hours Worked
                </BoldText>
                <BoldText
                  sx={{ paddingLeft: 3, paddingRight: 10, paddingY: 2 }}
                >
                  1357
                </BoldText>
              </Box>
              <Divider />
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <BoldText sx={{ paddingX: 3, paddingY: 3 }}>
                  Jobs Completed
                </BoldText>
                <BoldText
                  sx={{ paddingLeft: 3, paddingRight: 10, paddingY: 2 }}
                >
                  95%
                </BoldText>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack
              sx={{
                border: "1px solid #EAECF0",
                borderRadius: "8px",
                boxShadow:
                  "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Heading sx={{ padding: 2 }}>Contract terms</Heading>
                <Box sx={{ padding: 2 }}>
                  <Link href="#">
                    <Image
                      src="/3dots.svg"
                      width={20}
                      height={20}
                      alt="calendar"
                    />
                  </Link>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ padding: 2 }}>
                <BoldText>Bid payment option</BoldText>
                <GreyText sx={{ marginTop: 1 }}>Fixed Price</GreyText>
              </Box>
              <Divider />
              <Box sx={{ padding: 2 }}>
                <BoldText>Bid payment amount</BoldText>
                <GreyText sx={{ marginTop: 1 }}>£1600</GreyText>
              </Box>
              <Divider />
              <Box sx={{ padding: 2 }}>
                <BoldText>Estimated Hours for completion</BoldText>
                <GreyText sx={{ marginTop: 1 }}>37 Hours</GreyText>
              </Box>
              <Divider />
              <Box sx={{ padding: 2 }}>
                <BoldText>Working time for this quest</BoldText>
                <GreyText sx={{ marginTop: 1 }}>Weekdays</GreyText>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack
              sx={{
                border: "1px solid #EAECF0",
                borderRadius: "8px",
                boxShadow:
                  "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Heading sx={{ padding: 2 }}>Description of work</Heading>
                <Box sx={{ padding: 2 }}>
                  <Link href="#">
                    <Image
                      src="/3dots.svg"
                      width={20}
                      height={20}
                      alt="calendar"
                    />
                  </Link>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ padding: 2 }}>
                <BoldText>Contract job title</BoldText>
                <GreyText sx={{ marginTop: 1 }}>Front end developer</GreyText>
              </Box>
              <Divider />
              <Box sx={{ padding: 2 }}>
                <BoldText>Description of the work</BoldText>
                <GreyText sx={{ marginTop: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </GreyText>
              </Box>
              <Divider />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack
              sx={{
                border: "1px solid #EAECF0",
                borderRadius: "8px",
                boxShadow:
                  "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
              }}
            >
              <Box display="flex" alignItems="center" padding={2}>
                <Checkbox
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                />
                <Typography
                  sx={{
                    color: "#101828",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                  }}
                >
                  Yes, I understand and agree to
                  <Link
                    href="#"
                    style={{ color: "#498553", textDecoration: "none" }}
                  >
                    Guilds terms of service
                  </Link>
                  , including{" "}
                  <Link
                    href="#"
                    style={{ color: "#498553", textDecoration: "none" }}
                  >
                    {" "}
                    user agreement
                  </Link>
                  and{" "}
                  <Link
                    href="#"
                    style={{ color: "#498553", textDecoration: "none" }}
                  >
                    privacy policy
                  </Link>
                  .
                </Typography>
              </Box>
              <Divider />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding={2}
              >
                <Button
                  variant="text"
                  sx={{ textTransform: "none", marginRight: 2 }}
                >
                  Cancel
                </Button>
                {acceptTerms ? (
                  <Button
                    onClick={submitContract}
                    variant="contained"
                    sx={{ textTransform: "none", marginRight: 2 }}
                  >
                    accept
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    sx={{ textTransform: "none", marginRight: 2 }}
                  >
                    accept
                  </Button>
                )}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
