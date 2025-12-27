import { createContext } from "react";

export const  Appcontext=createContext()

const Appcontextprovider=({children})=>{

    const value={



    }
   return (
    <Appcontext.Provider value={value}>
        {children}

    </Appcontext.Provider>
   )

}

export default Appcontextprovider