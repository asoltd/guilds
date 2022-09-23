import styles from "../styles/Home.module.css"
import AddBid from "../components/AddBid"

export default function AddBidPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <AddBid />
    </div>
  )
}
