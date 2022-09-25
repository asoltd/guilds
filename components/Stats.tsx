import { useState } from "react"
import {
  ProfileStats,
  ExperienceAndReviews,
  QuestsStats,
} from "components/AllStats"

export function Stats(): JSX.Element {
  const [showStats, setShowStats] = useState("Quests")
  const tabs = ["Quests", "Profile", "Experience And Reviews"]

  function Tab(tab): JSX.Element {
    return (
      <div style={{ cursor: "pointer" }}>
        <a
          onClick={() => {
            setShowStats(tab.name)
          }}
        >
          <div>Show {tab.name}</div>
        </a>
      </div>
    )
  }
  return (
    <div>
      <div>
        {tabs.map((tab, idx) => (
          <Tab name={tab} key={idx} />
        ))}
      </div>
      {showStats == "Quests" && <QuestsStats />}
      {showStats == "Profile" && <ProfileStats />}
      {showStats == "Experience And Reviews" && <ExperienceAndReviews />}
    </div>
  )
}
