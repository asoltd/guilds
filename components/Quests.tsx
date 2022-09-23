import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateBids, populateQuests } from "../storage/quest"
import Link from "next/link"
import Bids from "../components/Bids"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, "quests"))
  const { status, data: quests } = useFirestoreCollectionData(questsQuery)

  return (
    <>
      <button onClick={() => populateQuests(firestore)}>
        populate quests if not populated
      </button>
      <button onClick={() => populateBids(firestore)}>
        populate bids if not populated
      </button>
      <Link href="/add-quest">
        <button>Add Quest</button>
      </Link>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <Grid columns={"repeat(auto-fit, minmax(16rem, 1fr))"} gap={"7rem"}>
              {quests?.length ? (
                quests.map((quest, idx) => (
                  <div key={idx}>
                    <div>Title: {quest?.title}</div>
                    <div>Description: {quest?.description}</div>
                    <div>Reward: {quest?.reward}</div>
                    <div>Tags: {quest?.tags[0]}</div>
                    <Bids path={`quests/${quest.questId}/bids`} />
                    <Link
                      href={{
                        pathname: "/quest",
                        query: { questId: quest.questId },
                      }}
                    >
                      <button>see quest</button>
                    </Link>
                  </div>
                ))
              ) : (
                <div>no quests</div>
              )}
            </Grid>
          )}
        </>
      )}
    </>
  )
}
