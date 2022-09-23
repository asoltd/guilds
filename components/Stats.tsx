import { useState } from "react"
import { QuestsStats } from "components/QuestsStats"
import { ProfileStats } from "components/ProfileStats"
import { ExperienceAndReviews } from "components/ExperienceAndReviews"

export function Stats(): JSX.Element {
  const [showStats, setShowStats] = useState("Quests")
  const tabs = ["Quests", "Profile", "Eperience And Reviews"]

  function Tab(name): JSX.Element {
    return (
      <div style={{ cursor: "pointer" }}>
        <a
          onClick={() => {
            setShowStats(name.name)
          }}
        >
          <div>Show {name.name}</div>
        </a>
      </div>
    )
  }
  return (
    <div>
      <div>
        {tabs.map((name, idx) => (
          <Tab name={name} key={idx} />
        ))}
      </div>
      {showStats == "Quests" && <QuestsStats />}
      {showStats == "Profile" && <ProfileStats />}
      {showStats == "Eperience And Reviews" && <ExperienceAndReviews />}
    </div>
  )
}
