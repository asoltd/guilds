import styled from "@emotion/styled"
import Link from "next/link"
import { useFirestore, useFirestoreDocData } from "reactfire"
import { doc } from "firebase/firestore"
import { useRouter } from "next/router"
import { Title } from "./Title"

const QuestEntry = styled.div``

export default function Quest(): JSX.Element {
  const router = useRouter()
  const { questId } = router.query
  const firestore = useFirestore()
  const questRef = doc(firestore, `quests/${questId}`)
  const { status: questStatus, data: quest } = useFirestoreDocData(questRef)

  return (
    <div>
      {questStatus === "loading" ? (
        <div>loading</div>
      ) : (
        <div>
          <Title>Quest: {quest?.title}</Title>
          <QuestEntry>{quest?.description}</QuestEntry>
          <QuestEntry>{quest?.reward}</QuestEntry>
          <QuestEntry>{quest?.tags}</QuestEntry>
          <Link
            href={{
              pathname: "/add-bid",
              query: { questId: quest.questId },
            }}
          >
            <button>add bid</button>
          </Link>
        </div>
      )}
    </div>
  )
}
