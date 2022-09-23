import styled from "styled-components"
import styles from "../styles/Home.module.css"
import Quests from "components/Quests"
import { Title } from "components/Title"

export default function QuestsPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Title>Quests</Title>
      <Quests />
    </div>
  )
}
