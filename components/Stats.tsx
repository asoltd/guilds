import { useState } from "react"
import QuestStats from "components/QuestStats"

export default function Stats() {
  const [ShowStats, setShowStats] = useState("QuestStats")

  function ShowQuests() {
    return (
      <div style={{ cursor: "pointer" }}>
        <a
          onClick={() => {
            setShowStats("QuestStats")
          }}
        >
          Show Quests
        </a>
      </div>
    )
  }

  return (
    <div>
      <ShowQuests />
      {ShowStats && <QuestStats />}
    </div>
  )
}
