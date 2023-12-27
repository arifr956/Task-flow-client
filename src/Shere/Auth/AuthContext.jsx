import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "./Firebase ";

export const AuthCreate = createContext()
const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    //  user create the website 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unSubscrib = onAuthStateChanged(auth, creentUser =>{
            setLoading(false)
            setUser(creentUser)
        })
        return ()=>{unSubscrib()}
    },[])

    const logOut = ()=>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleUser,
        logOut,
    }
    return (
        <AuthCreate.Provider value={authInfo}>
            {children}
        </AuthCreate.Provider>
    );
};

export default AuthContext;