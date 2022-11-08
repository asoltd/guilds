import { Firestore, collection, doc, setDoc } from "firebase/firestore"
import { Course } from "../course"
import { faker } from "@faker-js/faker"

export const populateCourses = async (firestore: Firestore) => {
  try {
    const promises: Course[] | any = []
    for (let i = 0; i < 3; i++) {
      const coursesRef = collection(firestore, `courses`)
      const courseRef = doc(coursesRef)

      const developerIds = [
        "imZrHGqnOCfGy44ya596jOyNHIG3",
        "QfABV59rDVWcUDBvtiaZCrQ8mTJ2",
        "zfUtzkbpCdRVjBKHACyT5pjg1bb2",
      ]
      const userId = developerIds[faker.datatype.number({ min: 0, max: 2 })]
      const isVerified = faker.datatype.boolean()

      const course: Course = {
        id: courseRef.id,
        xp: faker.datatype.number({ min: 1, max: 9999 }),
        verified: isVerified,
        title: faker.lorem.sentence(5),
        description: faker.lorem.sentences(10),
        image: faker.image.imageUrl(),
        rating: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
      }
      const verifiedCourse: Course = {
        ...course,
        provider: faker.company.name(),
      }
      const notVerifiedCourse: Course = {
        ...course,
        creatorId: userId,
      }
      promises.push(
        setDoc(courseRef, isVerified ? verifiedCourse : notVerifiedCourse)
      )
    }
    const results: Course[] = await Promise.all(promises)
    alert("Courses created: " + results.length)
  } catch (e) {
    console.error(e)
    alert("Error: " + e)
  }
}
