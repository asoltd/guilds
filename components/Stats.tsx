import { useState } from "react"
import QuestsStats from "components/QuestsStats"
import BountyStats from "components/BountyStats"

export default function Stats(): JSX.Element {
  const [showStats, setShowStats] = useState("QuestsTab")
  const tabs = ["QuestsTab", "BountyTab", "PlaceholderTab1", "PlaceholderTab2"]

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
      {showStats == "QuestsTab" && <QuestsStats />}
      {showStats == "BountyTab" && <BountyStats />}
    </div>
  )
}
