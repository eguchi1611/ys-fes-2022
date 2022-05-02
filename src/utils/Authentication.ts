import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "firebaseconfig";

function login() {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}

function logout() {
  signOut(auth);
}

export { login, logout };
