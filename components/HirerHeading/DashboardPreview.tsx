import { Box } from "@mui/material"
import Image from "next/image"

export function DashboardPreview() {
  return (
    <Box
      width="100%"
      height="33rem"
      position="relative"
      sx={{
        borderStyle: "solid",
        borderWidth: "10px 10px 0 10px",
        borderRadius: "30px 30px 0 0",
      }}
    >
      <Image
        fill
        object-fit="contain"
        src="/dashboard-preview.svg"
        alt="dashboard preview"
      />
    </Box>
  )
}
