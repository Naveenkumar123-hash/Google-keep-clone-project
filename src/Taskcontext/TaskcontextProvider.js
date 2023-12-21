import { createContext, useState } from "react";

export const Taskcontext=createContext()

const TaskcontextProvider=({children})=>{
    const [task,setTask]=useState([])
    return (
        <Taskcontext.Provider value={{task,setTask}}>
          {children}
        </Taskcontext.Provider>
    )
}

export default TaskcontextProvider