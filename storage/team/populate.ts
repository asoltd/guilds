import { Firestore, collection, doc, setDoc } from "firebase/firestore"
import { Team, Tag } from "../../storage/team"
import { faker } from "@faker-js/faker"

export const populateTeams = async (firestore: Firestore): Promise<void> => {
  const values = Object.keys(Tag)
  try {
    const teamsRef = collection(firestore, `teams`)
    const teamRef = doc(teamsRef)
    const team: Team = {
      id: teamRef.id,
      image: faker.image.imageUrl(),
      name: {
        first: faker.name.firstName(),
        second: faker.name.middleName(),
        last: faker.name.lastName(),
      },
      title: Tag[values[Math.floor(Math.random() * values.length)]],
      description: faker.lorem.sentences(3),
      tags: [],
    }
    setDoc(teamRef, team)
    alert("Team added")
  } catch (e: any) {
    alert("Error: " + e)
  }
}
