import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   create user with email and password
  const createUser = (name, email, password, photoUrl) => {
    return createUserWithEmailAndPassword(
      auth,
      name,
      email,
      password,
      photoUrl,
    );
  };

  //   singIn with email and password
  const singInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign out
  const logOut = () => {
    return signOut(auth);
  };

  //  current user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    singInEmailPassword,
    loading,
    logOut,
  };
  return (
    <AuthContext.Provider value={{ authInfo }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
