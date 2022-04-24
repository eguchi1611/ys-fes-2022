import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut as FirebaseSignOut,
} from "firebase/auth";

export function useLogin() {
  function signIn() {
    signInWithRedirect(auth, new GoogleAuthProvider());
  }

  function signOut() {
    FirebaseSignOut(auth);
  }

  return { signIn, signOut };
}
