import { useState } from "react"
import QuestsStats from "components/QuestsStats"
import ProfileStats from "components/ProfileStats"
import ExperienceAndRewiews from "components/ExperienceAndRewiews"

export default function Stats(): JSX.Element {
  const [showStats, setShowStats] = useState("Quests")
  const tabs = ["Quests", "Profile", "Epirience And Reviews"]

  function Tab(tabName): JSX.Element {
    return (
      <div style={{ cursor: "pointer" }}>
        <a
          onClick={() => {
            setShowStats(tabName.tabName)
          }}
        >
          <div>Show {tabName.tabName}</div>
        </a>
      </div>
    )
  }
  return (
    <div>
      <div>
        {tabs.map((tab, idx) => (
          <Tab tabName={tab} key={idx} />
        ))}
      </div>
      {showStats == "Quests" && <QuestsStats />}
      {showStats == "Profile" && <ProfileStats />}
      {showStats == "Epirience And Reviews" && <ExperienceAndRewiews />}
    </div>
  )
}
