 import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'

const AuthContext= React.createContext();

export  const useAuth=()=> {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
 
    const[loading,setLoading]=useState(true)
    const[user,setUser]=useState()

    const signup=(email,password)=>{
      return  auth.createUserWithEmailAndPassword(email,password)
    }
    
    const login=(email,password)=>{
       return auth.signInWithEmailAndPassword(email,password)
    }

    const logout=()=> {
        return auth.signOut()
      }
    
    
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
          setUser(userAuth)
          setLoading(false)
        }) 
        return unsubscribe
      }, [user])
    
    const value={
        user,
        signup,
        login,
        logout
    }

    return (
         <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider> 

    )
}


   
