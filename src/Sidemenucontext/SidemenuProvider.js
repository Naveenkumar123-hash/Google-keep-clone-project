import { createContext, useState } from "react";

export const Sidemenucontext=createContext()

const SidemenuProvider=({children})=>{
    const [menu,setMenu]=useState(false)
    return (<Sidemenucontext.Provider value={{menu,setMenu}}>
            {children}
           </Sidemenucontext.Provider>
    )
    }
export default SidemenuProvider