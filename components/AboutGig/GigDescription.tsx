import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { descriptionInput } from "./UserInput"

export function GigDescription() {
  return (
    <Stack
      spacing={3}
      sx={{
        flexDirection: { md: "row", lg: "row", xl: "row" },
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: { md: "50%", lg: "50%", xl: "50%" },
          overflow: "auto",
        }}
      >
        {descriptionInput.description1}lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id
        dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
        mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut
        id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id
        dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
        mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut
        id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id
        dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
        mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut
        id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id
        dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        elit libero, a pharetra augue. Nullam id dolor id nibh ultricies
        vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu
        leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis
        risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare
        vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id
        nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis
        ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
        elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id
        dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
      </Typography>
    </Stack>
  )
}
