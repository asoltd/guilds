import { useState } from "react"
import { QuestsStats } from "components/Tabs/QuestStats"
import { ProfileStats } from "components/Tabs/ProfileStats"
import { ExperienceAndReviews } from "components/Tabs/ExpirienceAndReviews.tsx"
import styled from "styled-components"

const Button = styled.div`
  cursor: pointer;
`

export function Stats(): JSX.Element {
  const [showStats, setShowStats] = useState("QuestsStats")

  function Tabs(tab): JSX.Element {
    return (
      <>
        <Button>
          <a
            onClick={() => {
              setShowStats("QuestsStats")
            }}
          >
            <div>Show Quest Stats</div>
          </a>
        </Button>
        <Button>
          <a
            onClick={() => {
              setShowStats("ProfileStats")
            }}
          >
            <div>Show Profile Stats</div>
          </a>
        </Button>
        <Button>
          <a
            onClick={() => {
              setShowStats("ExperienceAndReviews")
            }}
          >
            <div>Show Experience And Reviews</div>
          </a>
        </Button>
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
