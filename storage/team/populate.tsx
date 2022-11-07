import {
  Firestore,
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore"
import { faker } from "@faker-js/faker"
import { Team, RoleTitle, Industry, Bid } from "../../storage/team"

const populateTeams = async (firestore: Firestore) => {
  try {
    const promises = []
    for (let i = 0; i < 3; i++) {
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
    alert("Error: " + e)
  }
}

const populateRoles = async (firestore: Firestore) => {
  try {
    const promises = []
    const teamsRef = collection(firestore, "teams")
    const teamsSnapshot = await getDocs(teamsRef)
    teamsSnapshot.forEach(async (teamDoc) => {
      const team = teamDoc.data() as Team
      const roles = Object.values(RoleTitle)
      const selectedRoles = []
      for (let i = 0; i < faker.datatype.number({ min: 2, max: 10 }); i++) {
        selectedRoles.push(
          roles[faker.datatype.number({ min: 0, max: roles.length - 1 })]
        )
      }
      selectedRoles.forEach(async (role: RoleTitle) => {
        const rolesRef = collection(firestore, `teams/${team.id}/roles`)
        const roleRef = doc(rolesRef)
        const roleData = {
          id: roleRef.id,
          title: role,
          description: faker.lorem.sentences(5),
          createdAt: faker.date.past(),
          status: "free",
          thumbnail: "role.jpeg",
        }
        promises.push(setDoc(roleRef, roleData))
      })
    })
    const results = await Promise.all(promises)
    alert("Roles created: " + results.length)
  } catch (e) {
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
    teamsSnap?.docs.forEach(async (team) => {
      const rolesRef = collection(firestore, `teams/${team.id}/roles`)
      const rolesSnap = await getDocs(rolesRef)
      const remainingRoles = rolesSnap.docs
      const slots = rolesSnap.docs.length
      const members = heroesSnap?.docs?.splice(
        0,
        faker.datatype.number({ min: 1, max: slots })
      )
      const membersRef = collection(firestore, `teams/${team.id}/members`)
      const membersSnap = await getDocs(membersRef)
      if (membersSnap?.docs?.length === 0) {
        members?.forEach((member, idx) => {
          promises.push(
            setDoc(doc(firestore, `teams/${team.id}/members`, member.id), {
              ...member.data(),
              role: remainingRoles.shift().id,
            })
          )
          promises.push(
            updateDoc(
              doc(
                firestore,
                `teams/${team?.id}/roles`,
                rolesSnap.docs[idx].data().id
              ),
              {
                status: "taken",
              }
            )
          )
        })
      }
    })
    await Promise.all(promises)
    alert("Members created")
  } catch (e) {
    alert("Error: " + e)
  }
}

const populateBids = async (firestore: Firestore) => {
  try {
    const promises = []
    const teamsRef = collection(firestore, `teams`)
    const teamsSnap = await getDocs(teamsRef)
    teamsSnap?.docs.forEach(async (team) => {
      const rolesRef = collection(firestore, `teams/${team.id}/roles`)
      const rolesSnap = await getDocs(rolesRef)
      rolesSnap?.docs.forEach(async (role) => {
        const bidsRef = collection(
          firestore,
          `teams/${team.id}/roles/${role.id}/bids`
        )
        const bidsSnap = await getDocs(bidsRef)
        if (bidsSnap?.docs?.length === 0) {
          for (let i = 0; i < faker.datatype.number({ min: 0, max: 5 }); i++) {
            const bidRef = doc(bidsRef)
            const bid: Bid = {
              id: bidRef?.id,
              teamId: team?.data().id,
              bidderId: "imZrHGqnOCfGy44ya596jOyNHIG3",
              amount: faker.datatype.number({ min: 1, max: 1000 }),
              timeEstimate: `${faker.datatype.number({
                min: 1,
                max: 100,
              })} days`,
              createdAt: faker.date.past(),
              status: "pending",
            }
            promises.push(setDoc(bidRef, bid))
          }
        }
      })
    })
    await Promise.all(promises)
    alert("Bids created")
  } catch (e) {
    alert("Error: " + e)
  }
}

export const populate = async (firestore: Firestore) => {
  try {
    await populateTeams(firestore)
    await populateRoles(firestore)
    await populateMembers(firestore)
    await populateBids(firestore)
  } catch (e) {
    alert("Error: " + e)
  }
}
