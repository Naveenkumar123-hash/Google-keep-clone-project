import data from "../../Data/Data"
import "./Button.css"

const Button=({setSelectedcolor})=>{
    return (
        <div id="button">
            {
                data.map((e)=>
                <button style={{backgroundColor:e.color}} onClick={()=>setSelectedcolor(e.color)}></button>
                )
            }
            <input type="color" onChange={(e)=>setSelectedcolor(e.target.value)}/>
        </div>
    )
}

export default Button