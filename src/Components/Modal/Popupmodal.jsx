import React from "react";
import "./Taskmodal.css"

const Popupmodal=({setShowpopup,setSelected})=>{
    return(
        <div>
            <div id="popup">
                 <p>Are you sure you want to delete ?</p>
                 <button onClick={()=>{setSelected(true)}}>Confirm Delete</button>
                 <button onClick={()=>{setShowpopup(false)}}>Cancel</button>
            </div>
        </div>
    )
}

export default Popupmodal