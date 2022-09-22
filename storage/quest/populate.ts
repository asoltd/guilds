import { Firestore, collection, getDocs, addDoc } from "firebase/firestore"
import { Quest } from "../../storage/quest"
import { faker } from "@faker-js/faker"
import { userAgent } from "next/server"
import { getAuth } from "firebase/auth"

export const populateQuests = async (firestore: Firestore) => {
  const questRef = collection(firestore, `quests`)
  const promises = []
  const auth = getAuth()
  for (let i = 0; i < 3; i++) {
    const quest: Quest = {
      image: faker.image.imageUrl(),
      reward: faker.datatype.number({ min: 1, max: 1000 }),
      title: faker.lorem.sentence(5),
      description: faker.lorem.sentences(5),
      tags: [],
      userId: faker.datatype.uuid(),
      bidders: [
        ["QfABV59rDVWcUDBvtiaZCrQ8mTJ2", faker.datatype.uuid()][
          faker.datatype.number({ min: 0, max: 1 })
        ],
      ],
    }
    promises.push(addDoc(questRef, quest))
    const results = await Promise.all(promises)
    console.log(results[0])
  }
}
