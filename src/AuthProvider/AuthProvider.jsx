import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  

//   Create User
    const createNewUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

//    Sign In

    const userLogin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

//   Signin with Google
    const googleLogin = () => {
        return signInWithPopup(auth,provider)
    }

//   Sign Out User
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

//   update profile
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData)
    }

    // Reset Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };


  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    googleLogin,
    loading,
    updateUserProfile,
    resetPassword,

  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return () =>{
        unsubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
