import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  const authInfo = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={{ authInfo }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
