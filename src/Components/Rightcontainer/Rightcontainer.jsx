import React, { useEffect, useState,useContext } from "react";
import "./Rightcontainer.css";
import Modal from "../Modal/Modal";
import Taskmodal from "../Modal/Taskmodal"
import { Taskcontext } from "../../Taskcontext/TaskcontextProvider";

const Rightcontainer = () => {
  const {task,setTask}=useContext(Taskcontext)
  const [modal, setModal] = useState(false);

  function handlefn() {
    setModal(true);
  }

  function taskdelete(value){
    const updatedTask = task.slice().reverse().filter((_, i) => i !== value);
    setTask(updatedTask)
    localStorage.setItem('tasks', JSON.stringify(updatedTask));
}

  
  useEffect(()=>{
       setTask(JSON.parse(localStorage.getItem("tasks"))??[])
  },[])


  return (
    <div id="rightcontainer">
      {modal ? (
        <Modal setModal={setModal} />
      ) : (
        <div id="inputs">
          <input type="text" placeholder="Take a note..." onFocus={handlefn} />
        </div>
      )}
      <div id="task-modal">
      {
        task &&  task.slice().reverse().map((tasks,index)=>
        <Taskmodal tasks={tasks} key={index} index={index} taskdelete={taskdelete}/>)
      }
      </div>
    </div>
  );
};

export default Rightcontainer;
