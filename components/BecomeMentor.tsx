import styled from "@emotion/styled"
import React, { useState, MouseEvent } from "react"
import { useSigninCheck } from "reactfire"
import Image from "next/image"
import { useTheme } from "@mui/material/styles"
import {
  Stack,
  Box,
  Typography,
  Grid,
  Divider,
  Backdrop,
  Avatar,
  Container,
  InputAdornment,
  TextField,
  Button,
  Fade,
  useMediaQuery,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material"
import { SmallUserCard } from "./UserCards"

const Heading = styled(Typography)({
  color: "#101828",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  fontWeight: 500,
})

export function BecomeMentor(): JSX.Element {
  const [mentorTerms, setMentorTerms] = useState("Fixed")
  const [unit, setUnit] = useState("£")
  const [workingTimes, setWorkingTimes] = useState("Weekdays")
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("md"))

  const { status, data: signInCheckResult } = useSigninCheck()

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmall ? null : 800,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  }

  const handleUnit = (
    event: MouseEvent<HTMLElement>,
    newUnit: string | null
  ) => {
    setUnit(newUnit)
  }

  const handleWorkingTimes = (
    event: MouseEvent<HTMLElement>,
    newWorkingTimes: string | null
  ) => {
    setWorkingTimes(newWorkingTimes)
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  if (status == "success") {
    return (
      <>
        <Container disableGutters>
          <Box
            sx={{
              width: "90vw",
              backgroundColor: "#F9FAFB",
              borderRadius: "8px",
              padding: 9,
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography
                sx={{
                  marginRight: "auto",
                  fontSize: "1.875rem",
                  lineHeight: "2.375rem",
                  color: "#101828",
                  fontWeight: 600,
                }}
              >
                Think you have what it takes? Become a mentor
              </Typography>
              <Button
                variant="outlined"
                sx={{ marginLeft: 2, textTransform: "none" }}
              >
                Learn more
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: "none", marginX: 2 }}
                onClick={handleOpen}
              >
                Become mentor
              </Button>
            </Box>
            <Typography
              sx={{
                color: "#667085",
                marginTop: 2,
                fontWeight: 400,
                fontSize: "1.25rem",
                lineHeight: "1.875rem",
              }}
            >
              See why brands love hiring our mentors
            </Typography>
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <SmallUserCard
                      photo={signInCheckResult.user?.photoURL}
                      name="Yoni Albi"
                      title="Front-end developer"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack
                      sx={{
                        height: "100%",
                        width: "100%",
                        border: "1px solid #EAECF0",
                        borderRadius: "8px",
                        boxShadow:
                          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
                      }}
                    >
                      <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ marginX: 3, marginTop: 2, marginBottom: 2 }}
                      >
                        <Heading>Become a Mentor</Heading>
                        <Image
                          src="/x.svg"
                          width={10}
                          height={10}
                          alt="close"
                        />
                      </Stack>
                      <Divider />
                      <Stack
                        flexDirection="row"
                        alignItems="center"
                        sx={{ margin: 2 }}
                      >
                        <Button
                          onClick={() => setMentorTerms("Hourly")}
                          fullWidth
                          variant={
                            mentorTerms == "Hourly" ? "contained" : "outlined"
                          }
                          sx={{
                            textTransform: "none",
                            marginRight: 1,
                            borderRadius: 2,
                          }}
                        >
                          Hourly
                        </Button>
                        <Button
                          onClick={() => setMentorTerms("Fixed")}
                          fullWidth
                          variant={
                            mentorTerms == "Fixed" ? "contained" : "outlined"
                          }
                          sx={{
                            textTransform: "none",
                            marginLeft: 1,
                            borderRadius: 2,
                          }}
                        >
                          Fixed
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      sx={{
                        height: "100%",
                        width: "100%",
                        border: "1px solid #EAECF0",
                        borderRadius: "8px",
                        boxShadow:
                          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
                      }}
                    >
                      <Grid
                        container
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ padding: 2 }}
                      >
                        <Grid item xs={4}>
                          <ToggleButtonGroup
                            value={unit}
                            exclusive
                            size="large"
                            onChange={handleUnit}
                            aria-label="unit-choose"
                            color="primary"
                          >
                            <ToggleButton value="£" aria-label="pound">
                              £
                            </ToggleButton>
                            <ToggleButton value="%" aria-label="percentage">
                              %
                            </ToggleButton>
                            <ToggleButton value="$" aria-label="dollar">
                              $
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            fullWidth
                            placeholder="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Divider />
                      <Grid
                        container
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ padding: 2 }}
                      >
                        <Grid item xs={4}>
                          <Typography>Title</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            fullWidth
                            placeholder="Front-end developer"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  {" "}
                                  <Image
                                    src="/pencil.svg"
                                    width={15}
                                    height={15}
                                    alt="close"
                                  />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Divider />
                      <Grid
                        container
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ padding: 2 }}
                      >
                        <Grid item xs={4}>
                          <Typography>Description</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            fullWidth
                            multiline
                            rows={6}
                            maxRows={6}
                            placeholder="Enter a description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Divider />
                      <Grid
                        container
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ padding: 2 }}
                      >
                        <Grid item xs={4}>
                          <Typography>Available working times</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <ToggleButtonGroup
                            value={workingTimes}
                            exclusive
                            size="large"
                            onChange={handleWorkingTimes}
                            aria-label="working-time-choose"
                            color="primary"
                            sx={{ marginRight: 2 }}
                          >
                            <ToggleButton
                              value="Weekdays"
                              aria-label="weekdays"
                            >
                              Weekdays
                            </ToggleButton>
                            <ToggleButton
                              value="Weekdays(evenings only)"
                              aria-label="weekday-evening-only"
                            >
                              Weekday evenings
                            </ToggleButton>
                            <ToggleButton
                              value="Weekends"
                              aria-label="weekends"
                            >
                              Weekends
                            </ToggleButton>
                            <ToggleButton
                              sx={{ textDecoration: "none" }}
                              value="Any"
                              aria-label="any"
                            >
                              <Typography sx={{ textDecoration: "none" }}>
                                Any
                              </Typography>
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </Grid>
                      </Grid>
                      <Divider />
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ margin: 2, marginRight: 1 }}
                      >
                        <Button
                          variant="text"
                          sx={{ textTransform: "none", marginRight: 2 }}
                          onClick={() => handleClose()}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          disabled={!title || !amount}
                          sx={{ textTransform: "none", marginRight: 2 }}
                        >
                          Begin
                        </Button>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Modal>
        </Container>
      </>
    )
  }
}
