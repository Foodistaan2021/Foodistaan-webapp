import { useContext } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
        }from "firebase/auth";
import {auth} from "../firebase";
import { useEffect } from "react";
import { useState } from "react";


const userAuthContext = createContext();

export function UserAuthContectProvider({ children }) {
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
        });
        return () =>{
            unsubscribe();
        }
      }, []);
    
      const [currentUser, setCurrentUser] = useState("")
      const value = {
          currentUser,
          signup
      }
    
    return (
        <UserAuthContect.Provider value={value}>{children}</UserAuthContect.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}