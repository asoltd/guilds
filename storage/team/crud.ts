import {
    Firestore,
    doc,
    getDoc,
    addDoc,
    collection,
  } from "firebase/firestore"
  import  {Team} from "./types"
  
  const writeTeam = async (firestore: Firestore, team: Team) => {
    const teamColRef = collection(firestore, `teams`)
    const teamRef = doc(firestore, `teams/${team._id}`)
    const teamSnap = await getDoc(teamRef)
    if (teamSnap.exists()) {
      await addDoc(teamColRef, team)
    }
  }
  
  const readTeam = (firestore: Firestore, reactfire: any, _id: string) => {
    const teamRef = doc(firestore, `teams/${_id}`)
    const { data: teamDoc } = reactfire.getDoc(teamRef)
    return teamDoc
  }
  
  const readTeams = async (firestore: Firestore, getCol: any) => {
    const teamRef = collection(firestore, `teams`)
    const { data } = getCol(teamRef)
    return data.docs
  }
  
  export { writeTeam, readTeam, readTeams }
  