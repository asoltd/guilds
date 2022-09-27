import { UUID } from './../common';
import { Firestore, collection, getDocs, addDoc } from "firebase/firestore"
import { Team, Tag } from "../../storage/team"
import { faker } from "@faker-js/faker"

export const populateTeams = async (firestore: Firestore) => {
  const teamRef = collection(firestore, `teams`)
  const promises = []

  const values = Object.keys(Tag);

  for (let i = 0; i < 3; i++) {
    const team: Team = {
      image: faker.image.imageUrl(),
      name: {
        first: faker.name.firstName(),
        second: faker.name.middleName(),
        last: faker.name.lastName()
      },
      title: Tag[values[Math.floor(Math.random() * values.length)]],
      description: faker.lorem.sentences(3),
      tags: [],
    }
    promises.push(addDoc(teamRef, team))
    const results = await Promise.all(promises)
    console.log(results[0])
  }
}
