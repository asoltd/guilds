import { faker } from "@faker-js/faker"

function getDatesInRange(startDate: Date, endDate: Date): string[] {
  const date = new Date(startDate.getTime())
  const dates = []
  while (date <= endDate) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return dates.map((date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  })
}

const getData = (startDate: Date, endDate: Date) => {
  const dates = getDatesInRange(startDate, endDate)
  const data = []
  for (let i = 0; i < dates.length; i++) {
    let value = 0
    if (i == 0) {
      value = faker.datatype.number({ min: 200, max: 250 })
    } else {
      value = faker.datatype.number({ min: -10, max: 10 }) + data[i - 1].y
    }
    data.push({
      x: dates[i],
      y: value,
    })
  }
  return data
}

export const data = {
  labels: getDatesInRange(new Date(2022, 0, 2), new Date(2022, 11, 31)),
  datasets: [
    {
      label: "Total Earnings",
      data: getData(new Date(2022, 0, 2), new Date(2022, 11, 31)),
      backgroundColor: "#50915B",
      borderColor: "#50915B",
      lineTension: 0.5,
    },
    {
      label: "XP Earned",
      data: getData(new Date(2022, 0, 2), new Date(2022, 11, 31)),
      backgroundColor: "#7BB785",
      borderColor: "#7BB785",
      lineTension: 0.5,
    },
  ],
}
