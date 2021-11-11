import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export async function login() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export async function logout() {
  return signOut(auth);
}

export function thisUser() {
  return auth.currentUser.displayName;
}
