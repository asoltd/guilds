import {
  Firestore,
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  setDoc,
  doc,
} from "firebase/firestore"
import { Quest, Bid, Tag } from "../../storage/quest"
import { faker } from "@faker-js/faker"

const populateQuests = async (firestore: Firestore) => {
  try {
    const promises = []
    for (let i = 0; i < 3; i++) {
      const developerIds = [
        "imZrHGqnOCfGy44ya596jOyNHIG3",
        "QfABV59rDVWcUDBvtiaZCrQ8mTJ2",
        "zfUtzkbpCdRVjBKHACyT5pjg1bb2",
      ]
      const userId = developerIds[faker.datatype.number({ min: 0, max: 2 })]
      const bidders = developerIds.filter((id) => id !== userId)
      const questsRef = collection(firestore, "quests")
      const questRef = doc(questsRef)
      const quest: Quest = {
        id: questRef.id,
        userId: userId,
        image: faker.image.imageUrl(),
        reward: faker.datatype.number({ min: 1, max: 1000 }),
        title: faker.lorem.sentence(5),
        description: faker.lorem.sentences(5),
        tags: [Object.values(Tag)[faker.datatype.number(6)]],
        bidders: bidders,
        status: ["open", "closed"][faker.datatype.number(1)],
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
    quests.docs.forEach((quest: QueryDocumentSnapshot<DocumentData>) => {
      for (let i = 0; i < 3; i++) {
        const bidsRef = collection(firestore, `quests/${quest.id}/bids`)
        const bidRef = doc(bidsRef)
        const bid: Bid = {
          id: bidRef.id,
          questId: quest.data().id,
          userId:
            quest.data().bidders[faker.datatype.number({ min: 0, max: 1 })],
          amount: faker.datatype.number({ min: 1, max: 1000 }),
          timeEstimate: `${faker.datatype.number({ min: 1, max: 100 })} days`,
          createdAt: faker.date.past(),
          status: ["pending", "accepted", "rejected"][
            faker.datatype.number({ min: 0, max: 2 })
          ],
        }
        promises.push(setDoc(bidRef, bid))
      }
    })
    const results = await Promise.all(promises)
    alert("Bids created: " + results.length)
  } catch (e) {
    console.log(e)
    alert("Error: " + e)
  }
}

export { populateQuests, populateBids }
