import React, { createContext, useState } from "react";
const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    return (
      <UserContext.Provider value={{ token , setToken , user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  export default UserContext