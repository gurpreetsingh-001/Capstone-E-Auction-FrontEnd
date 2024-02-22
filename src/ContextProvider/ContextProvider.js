import React, { useState } from 'react'
import UserContext from '../contexts/UserContext'
export default function ContextProvider({children}) {
   // const [enableHeader,setEnableHeader] =useState(false);
    const[isAuthenticated,setIsAuthenticated]=useState(false);
  return (
    <UserContext.Provider value={{setIsAuthenticated,isAuthenticated}}>
        {children}
    </UserContext.Provider>
  )
}