import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const value = {
       user,
       setUser
    }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const UseUserContext = () => useContext(UserContext);