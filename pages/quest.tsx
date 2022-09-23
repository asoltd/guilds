import styles from "../styles/Home.module.css"
import Quest from "components/Quest"

export default function QuestPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Quest />
    </div>
  )
}
