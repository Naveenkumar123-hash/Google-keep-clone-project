import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext } from "react";
import { Sidemenucontext } from '../../Sidemenucontext/SidemenuProvider';
import "./Sidebar.css"

const Sidecontent=()=>{
    const {menu,setMenu}=useContext(Sidemenucontext)
    return (
        <div id={menu?"sidecontent":"sideicons"}>
            <div className='sideitem item-1'>
            <LightbulbOutlinedIcon/>
            <span className={
                menu?"sidebar-content":"sidebar-icons"
            }>Notes</span>
            </div>
            <div className='sideitem'>
            <NotificationsNoneOutlinedIcon/>
            <span className={
                menu?"sidebar-content":"sidebar-icons"
            }>Reminders</span>
            </div>
            <div className='sideitem'>
            <CreateOutlinedIcon/>
            <span className={
                menu?"sidebar-content":"sidebar-icons"
            }>Edit labels</span>
            </div>
            <div className='sideitem'>
            <ArchiveOutlinedIcon/>
            <span className={
                menu?"sidebar-content":"sidebar-icons"
            }>Archive</span>
            </div>
            <div className='sideitem'>
            <DeleteOutlineOutlinedIcon/>
            <span className={
                menu?"sidebar-content":"sidebar-icons"
            }>Trash</span>
            </div>
        </div>
    )
}

export default Sidecontent