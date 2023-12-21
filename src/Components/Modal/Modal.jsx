import React, { useState, useRef, useEffect, useContext } from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Button from "../Button/Button"
import "./Modal.css"
import {Taskcontext} from "../../Taskcontext/TaskcontextProvider" 

function Modal({ setModal }) {
  const {task,setTask}=useContext(Taskcontext)
  const [selectedcolor,setSelectedcolor]=useState("white")
  const [colors,setColors]=useState(false)
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const divRef = useRef(null);

  function handleBlur(){
    // if(title.length!==0 || text.length!==0){
    //   console.log(title)
    //   console.log(text)
    //   // const newobj={title:title,
    //   //               text:text,
    //   //               color:selectedcolor
    //   //               }
    //   // setTask([...task,newobj])
    //   // setColors(false)
    //   // setTitle('')
    //   // setText('')
    //   // setModal(false)
    // }
    setTitle('')
    setText('')
    setColors(false)
    setModal(false);
  };

  function updateArrayInLocalStorage(newValue) {
    const existingArray = JSON.parse(localStorage.getItem('tasks')) || [];
  
    existingArray.push(newValue);
  
    localStorage.setItem('tasks', JSON.stringify(existingArray));
  }
 
  function handlesubmitfn() {
    if(title.length>0 || text.length>0){
      const newobj={
                    title:title,
                    text:text,
                    color:selectedcolor
                    }
      setTask([...task,newobj])
      updateArrayInLocalStorage(newobj)
      setColors(false)
      setText('')
      setTitle('')
      setSelectedcolor("white")
      setModal(false)
    }
  }
  function handleclosefn() {
    setColors(false)
    setModal(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        handleBlur()
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[]);

  return (
    <div ref={divRef} id="modal" style={{backgroundColor:selectedcolor}}>
      <div id="modal-input">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{backgroundColor:selectedcolor}}
        />
        <input
          type="text"
          placeholder="Take a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{backgroundColor:selectedcolor}}
        />
      </div>
      <div id="modal-components">
        <div id="modal-icon">
        <ColorLensIcon onClick={()=>setColors(true)}/>
        </div>
        <div id="modal-btn">
        <button onClick={handlesubmitfn}>Submit</button>
        <button onClick={handleclosefn}>Close</button>
        </div>
      </div>
      {
        colors && <Button setSelectedcolor={setSelectedcolor}/>
      }
    </div>
  );
}
export default Modal;
