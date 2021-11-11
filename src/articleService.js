import { db } from "./firebaseConfig"
import { collection, getDocs, addDoc, orderBy, limit } from "firebase/firestore"

export async function createArticle({ title, body }) {
  const data = { title, body, date: new Date() }
  const docRef = await addDoc(collection(db, "entries"), data)
  return { id: docRef.id, ...data }
}

export async function fetchArticles() {
  const querySnapshot = await getDocs(
    collection(db, "entries"),
    orderBy("date", "desc"),
    limit(50)
  )
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}