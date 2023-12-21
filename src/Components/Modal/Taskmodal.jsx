import React, { useState, useEffect,useContext } from "react";
import "./Taskmodal.css"
import Popupmodal from "./Popupmodal"
import EditModal from "./EditModal";
import { Taskcontext } from "../../Taskcontext/TaskcontextProvider";

const Taskmodal=({tasks,taskdelete,index})=>{
    const {task,setTask}=useContext(Taskcontext)
    const [selected,setSelected]=useState(false)
    const [showpopup,setShowpopup]=useState(false)
    const [isedittable,setIseditable]=useState(false)
    
    function handlefn(){
        if(selected){
            taskdelete(index)
            setSelected(false)
            setShowpopup(false)
        }
    }
    function handlechange(values){
        const updatedarr = task.slice().reverse().map((tasks, i) => {
            if (i === index) {
              return values;
            }
            return tasks;
          });
        setTask(updatedarr)
        localStorage.setItem('tasks', JSON.stringify(updatedarr))
    }
    useEffect(()=>{
          handlefn()
    },[selected])
    
    return(
        <div id="task" style={{backgroundColor:tasks.color}} >
             <p>{tasks.title}</p>
             <p>{tasks.text}</p>
             <div id="task-section1">
             <button onClick={()=>setShowpopup(true)}>Delete</button>
             <button onClick={()=>setIseditable(true)}>Edit</button>
             </div>
             {
                showpopup && <Popupmodal setShowpopup={setShowpopup} setSelected={setSelected}/>
             }
             {
                isedittable && <EditModal tasks={tasks} setIseditable={setIseditable} handlechange={handlechange}/>
             }
        </div>
    )
}

export default Taskmodal