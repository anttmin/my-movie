import { createContext, useState } from "react";

export const FirstContext = createContext(null)

const FirstContextProvider = (props) =>{
  const [userName,setuserName] = useState('code hub')
 return(
  <FirstContext.Provider value={{userName}}>
    {props.children}
  </FirstContext.Provider>
 )
}

export default  FirstContextProvider;