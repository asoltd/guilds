import styled from "styled-components"
import { Tag } from "./Tag"
import { Tag as TagType } from "storage/quest/types"
import Bids from "./Bids"
import Link from "next/link"

const QuestProperty = styled.div``

export default function QuestHit({ hit }): JSX.Element {
  console.log(hit)
  return (
    <div>
      <QuestProperty>Title: {hit?.title}</QuestProperty>
      <QuestProperty>Description: {hit?.description}</QuestProperty>
      <QuestProperty>Reward: {hit?.reward}</QuestProperty>
      <QuestProperty>Tags:</QuestProperty>
      {hit?.tags.map((tag: TagType, idx) => (
        <Tag key={idx} value={tag} />
      ))}
      <Bids path={`quests/${hit.id}/bids`} />
      <Link
        href={{
          pathname: "/quest",
          query: { questId: hit.id },
        }}
      >
        <button>see quest</button>
      </Link>
    </div>
  )
}
