import { Firestore, collection, getDocs, setDoc, doc } from "firebase/firestore"
import { faker } from "@faker-js/faker"
import { Team, Role, Industry } from "../../storage/team"

const populateTeams = async (firestore: Firestore) => {
  try {
    const promises = []
    for (let i = 0; i < 3; i++) {
      const roles = Object.values(Role)
      const selectedRoles = []
      for (let i = 0; i < faker.datatype.number({ min: 2, max: 10 }); i++) {
        selectedRoles.push(
          roles[faker.datatype.number({ min: 0, max: roles.length - 1 })]
        )
      }
      const developerIds = [
        "imZrHGqnOCfGy44ya596jOyNHIG3",
        "QfABV59rDVWcUDBvtiaZCrQ8mTJ2",
        "zfUtzkbpCdRVjBKHACyT5pjg1bb2",
      ]
      const userId = developerIds[faker.datatype.number({ min: 0, max: 2 })]
      const highlight = [
        "Looking for a developer",
        "Looking for a designer",
        "Extended project duration",
      ][faker.datatype.number({ min: 0, max: 2 })]
      const teamsRef = collection(firestore, "teams")
      const teamRef = doc(teamsRef)
      const team: Team = {
        id: teamRef.id,
        creatorId: userId,
        title: faker.lorem.sentence(4),
        description: faker.lorem.sentences(5),
        highlight: highlight,
        roles: selectedRoles,
        industry:
          Object.values(Industry)[faker.datatype.number({ min: 0, max: 3 })],
        image: "team.jpeg",
        timeEstimate: faker.datatype.number({ min: 1, max: 10 }) + " months",
        createdAt: faker.date.past(),
      }
      promises.push(setDoc(teamRef, team))
    }
    const results = await Promise.all(promises)
    alert("Teams created: " + results.length)
  } catch (e) {
    console.error(e)
    alert("Error: " + e)
  }
}

const populateMembers = async (firestore: Firestore) => {
  try {
    const promises = []
    const heroesRef = collection(firestore, `heroes`)
    const heroesSnap = await getDocs(heroesRef)
    const teamsRef = collection(firestore, `teams`)
    const teamsSnap = await getDocs(teamsRef)
    console.log("teamsSnap", teamsSnap.docs)
    teamsSnap?.docs.forEach(async (team) => {
      const slots = team?.data().roles.length
      console.log("slots", slots)
      const members = heroesSnap?.docs?.splice(
        0,
        faker.datatype.number({ min: 1, max: slots })
      )
      const membersRef = collection(firestore, `teams/${team.id}/members`)
      const membersSnap = await getDocs(membersRef)
      if (membersSnap?.docs?.length === 0) {
        members?.forEach((member) => {
          console.log("memberdata", member.data())
          promises.push(
            setDoc(
              doc(firestore, `teams/${team.id}/members`, member.id),
              member.data()
            )
          )
        })
      }
    })
    const results = await Promise.all(promises)
    alert("Members created")
  } catch (e) {
    console.error(e)
    alert("Error: " + e)
  }
}

export { populateTeams, populateMembers }
