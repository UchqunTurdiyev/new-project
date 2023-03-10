import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "src/firebase";
import { useState } from "react";
import { async } from "@firebase/util";
import { useRouter } from "next/router";

export const useAuth = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<null | User>(null);

  const router = useRouter();

  const signUp = async(email: string, password: string) => {
    setIsloading(true);

     await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        router.push("/");
        setIsloading(true);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsloading(false));
  };

  const signIn = async (email: string, password: string) => {
    setIsloading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        router.push("/");
        setIsloading(true);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsloading(false));
  };

  const logout = async () => {
    setIsloading(true);

   await signOut(auth)
      .then(() => setUser(null))
      .catch((error) => setError(error.message))
      .finally(() => setIsloading(false));
  };

  return { error, isLoading, user, signIn, signUp, logout, setUser, setIsloading};
};
