import styles from "../styles/Home.module.css"
import AddQuest from "../components/AddQuest"

export default function AddQuestPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <AddQuest />
    </div>
  )
}
