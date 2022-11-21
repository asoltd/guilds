import {
  Firestore,
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  setDoc,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore"
import { faker } from "@faker-js/faker"
import { Quest, Bid, Tag } from "../../storage/quest"

const populateQuests = async (firestore: Firestore) => {
  try {
    const promises = []
    for (let i = 0; i < 3; i++) {
      const tags = Object.values(Tag).filter(() => Math.random() > 0.5)
      const developerIds = [
        "imZrHGqnOCfGy44ya596jOyNHIG3",
        "QfABV59rDVWcUDBvtiaZCrQ8mTJ2",
        "zfUtzkbpCdRVjBKHACyT5pjg1bb2",
      ]
      const userId = developerIds[faker.datatype.number({ min: 0, max: 2 })]
      const questsRef = collection(firestore, "quests")
      const questRef = doc(questsRef)
      const quest: Quest = {
        id: questRef.id,
        userId: userId,
        image: "office.jpeg",
        reward: faker.datatype.number({ min: 1, max: 1000 }),
        title: faker.lorem.sentence(5),
        description: faker.lorem.sentences(5),
        tags: tags,
        status: ["open", "closed"][faker.datatype.number(1)],
        createdAt: faker.date.past(),
        summary: faker.lorem.words(10),
        level: faker.datatype.number({ min: 1, max: 5 }),
      }
      promises.push(setDoc(questRef, quest))
    }
    const results = await Promise.all(promises)
    alert("Quests created: " + results.length)
  } catch (e) {
    console.error(e)
    alert("Error: " + e)
  }
}

const populateBids = async (firestore: Firestore) => {
  try {
    const questsRef = collection(firestore, `quests`)
    const quests = await getDocs(questsRef)
    const promises = []
    quests?.docs?.forEach((quest: QueryDocumentSnapshot<DocumentData>) => {
      const questRef = doc(firestore, `quests/${quest?.data().id}`)
      for (let i = 0; i < 2; i++) {
        const developerIds = [
          "imZrHGqnOCfGy44ya596jOyNHIG3",
          "QfABV59rDVWcUDBvtiaZCrQ8mTJ2",
          "zfUtzkbpCdRVjBKHACyT5pjg1bb2",
        ]
        const bidderId = developerIds[faker.datatype.number({ min: 0, max: 2 })]
        const bidsRef = collection(firestore, `quests/${quest?.id}/bids`)
        const bidRef = doc(bidsRef)
        const bid: Bid = {
          id: bidRef?.id,
          questId: quest?.data().id,
          bidderId: bidderId,
          amount: faker.datatype.number({ min: 1, max: 1000 }),
          timeEstimate: `${faker.datatype.number({ min: 1, max: 100 })} days`,
          createdAt: faker.date.past(),
          status: "pending",
        }
        promises.push(
          setDoc(bidRef, bid),
          updateDoc(questRef, { bidders: arrayUnion(bidderId) })
        )
      }
    })
    const results = await Promise.all(promises)
    alert("Bids created: " + results?.length)
  } catch (e) {
    console.log(e)
    alert("Error: " + e)
  }
}

export { populateQuests, populateBids }
