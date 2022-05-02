import { auth } from "firebaseconfig";
import { onAuthStateChanged, User } from "firebase/auth";
import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

const Context = createContext<User | null>(null);

type Props = {
  children: ReactElement;
};

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  return <Context.Provider value={user}>{children}</Context.Provider>;
}

function useAuth() {
  const user = useContext(Context);
  return user;
}

export default AuthProvider;
export { useAuth };
