import styles from "../styles/Home.module.css"
import FreelancerHub from "components/FreelancerHub"

export default function FreelancerHubPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <FreelancerHub />
    </div>
  )
}
