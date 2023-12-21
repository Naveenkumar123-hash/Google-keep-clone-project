import Rightcontainer from "../Rightcontainer/Rightcontainer"
import Sidebar from "../Sidebar/Sidebar"
import "./Mainpage.css"

const Mainpage=()=>{
    return(
        <div id="mainpage">
            <Sidebar/>
            <Rightcontainer/>
        </div>
    )
}

export default Mainpage