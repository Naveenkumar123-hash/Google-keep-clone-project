import React, { useEffect } from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useState } from "react";
import Button from "../Button/Button";
import "./Modal.css"


const EditModal=({tasks,setIseditable,handlechange})=>{
    const [title, setTitle] = useState(tasks.title);
    const [text, setText] = useState(tasks.text);
    const [selectedcolor,setSelectedcolor]=useState(tasks.color)
    const [colors,setColors]=useState(false)
    
    function handlesave(){
         handlechange({title,text,color:selectedcolor})
         setIseditable(false)
    }
    
    return (
        <div style={{backgroundColor:selectedcolor}} id="edit-modal">
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <div id="editbtn">
            <ColorLensIcon onClick={()=>setColors(true)}/>
            <button onClick={handlesave}>Save</button>
            </div>
            <div id="color">
            {
            colors && <Button setSelectedcolor={setSelectedcolor}/>
            }
            </div>
        </div>
    )
}

export default EditModal
