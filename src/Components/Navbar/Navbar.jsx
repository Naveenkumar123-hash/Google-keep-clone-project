import React, { useContext, useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import icon from "../../Assets/icon.png"
import logo from "../../Assets/ANLem4Z78uDNBvwJ_SAVoXBNkucrvrnV-zuRaR3M2tc=s64-c-mo.png"
import "./Navbar.css"
import { Sidemenucontext } from "../../Sidemenucontext/SidemenuProvider";
import { Taskcontext } from "../../Taskcontext/TaskcontextProvider";

const Navbar=()=>{
    const [search,setSearch]=useState("")
    const {task,setTask}=useContext(Taskcontext)
    const {menu,setMenu}=useContext(Sidemenucontext)


    useEffect(()=>{
        const updatedArr = task.filter((e) => e.text.includes(search) || e.title.includes(search));
        setTask(updatedArr)

    },[search])
    return(
        <div id="navbar">
            <div id="nav-1">
             <MenuIcon onClick={()=>setMenu(!menu)}/>
             <img src={icon} alt="icon"/>
             <span>Keep</span>
             </div>
             <div id="nav-2">
             <div id="nav-2-btn">
             <button>
                <SearchIcon/>
                <input type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
             </button>
             </div>
             <div id="nav-2-icons">
             <RefreshIcon/>
             <ViewStreamIcon/>
             <SettingsIcon/>
             </div>
             </div>
             <div id="nav-3">
             <AppsIcon/>
             <img src={logo} alt="logo"/>
             </div>
        </div>
    )
}

export default Navbar