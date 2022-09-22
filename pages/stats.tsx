import styled from "styled-components"
import styles from "../styles/Home.module.css"
import Stats from "components/Stats"

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 100px;
`

export default function StatsPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Title>Stats</Title>
      <Stats />
    </div>
  )
}
