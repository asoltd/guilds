import styled from "styled-components"
import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateQuests, populateBids } from "storage/quest/populate"
import Link from "next/link"
import Bids from "./Bids"
import { Tag } from "./Tag"
import { Quest } from "storage/quest"
import { Tag as TagType } from "storage/quest"

const QuestProperty = styled.div``

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
                quests.map((quest: Quest, idx) => (
                  <div key={idx}>
                    <QuestProperty>Title: {quest?.title}</QuestProperty>
                    <QuestProperty>
                      Description: {quest?.description}
                    </QuestProperty>
                    <QuestProperty>Reward: {quest?.reward}</QuestProperty>
                    <QuestProperty>Tags:</QuestProperty>
                    {quest?.tags.map((tag: TagType, idx) => (
                      <Tag key={idx} value={tag}></Tag>
                    ))}
                    <Bids path={`quests/${quest.id}/bids`} />
                    <Link
                      href={{
                        pathname: "/quest",
                        query: { questId: quest.id },
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
