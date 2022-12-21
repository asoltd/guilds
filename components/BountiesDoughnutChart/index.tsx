import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Box } from "@mui/material"

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ["Work in Progress", "In Review", "Pending", "Available"],
  datasets: [
    {
      label: "balance",
      data: [12, 19, 3, 5],
      backgroundColor: ["#50915B", "#61A86D", "#7BB785", "#96C59E"],
      borderWidth: 0,
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

export function DoughnutChart() {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: (theme) => theme.palette.grey[200],
        borderRadius: "0.5rem",
        width: "10rem",
        height: "10rem",
      }}
    >
      <Doughnut data={data} options={options} />
    </Box>
  )
}
