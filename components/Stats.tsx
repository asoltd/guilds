import { useState } from "react"
import { QuestsStats } from "components/Tabs/QuestStats"
import { ProfileStats } from "components/Tabs/ProfileStats"
import { ExperienceAndReviews } from "components/Tabs/ExpirienceAndReviews.tsx"

export function Stats(): JSX.Element {
  const [showStats, setShowStats] = useState("Quests")

  function Tabs(tab): JSX.Element {
    return (
      <>
        <div style={{ cursor: "pointer" }}>
          <a
            onClick={() => {
              setShowStats("QuestsStats")
            }}
          >
            <div>Show Quest Stats</div>
          </a>
        </div>
        <div style={{ cursor: "pointer" }}>
          <a
            onClick={() => {
              setShowStats("ProfileStats")
            }}
          >
            <div>Show Profile Stats</div>
          </a>
        </div>
        <div style={{ cursor: "pointer" }}>
          <a
            onClick={() => {
              setShowStats("ExperienceAndReviews")
            }}
          >
            <div>Show Experience And Reviews</div>
          </a>
        </div>
      </>
    )
  }
  return (
    <div>
      <Tabs />
      {showStats == "QuestsStats" && <QuestsStats />}
      {showStats == "ProfileStats" && <ProfileStats />}
      {showStats == "ExperienceAndReviews" && <ExperienceAndReviews />}
    </div>
  )
}
