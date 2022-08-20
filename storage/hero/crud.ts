import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { Hero } from "./types";
import { uuidv4 } from "@firebase/util";
import { UUID } from "storage/common";
import { firestore } from "../firestore";

// TODO throw errors and show popups in case of failure

export async function createHero(hero: Hero): Promise<void> {
  return await setDoc(doc(firestore, "heroes", uuidv4()), hero);
}

export async function readHero(uuid: UUID): Promise<Hero> {
  const hero = await getDoc(doc(firestore, "heroes", uuid));
  if (hero?.exists()) {
    return hero.data() as Hero;
  } else {
    return null;
  }
}

export async function updateHero(uuid: UUID, hero: Hero): Promise<void> {
  return await setDoc(doc(firestore, "heroes", uuid), hero);
}

export async function deleteHero(uuid: UUID): Promise<void> {
  return await deleteDoc(doc(firestore, "heroes", uuid));
}
