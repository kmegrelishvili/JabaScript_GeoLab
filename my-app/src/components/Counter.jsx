import "./form.css";
import Button from "./Button"
import { useState } from "react/cjs/react.development";

export default function Counter({initialValue, increment, newStyle}){
    const [value, setValue]=useState(initialValue? initialValue :0)

    function handleChange(e){
        setValue(parseInt(e.target.value))   
        
    }
return(
<div className="Counter">
    <h3> This is Counter</h3>
    <input type="number" onChange={handleChange} value={value} className={`btn ${newStyle ? newStyle:""}`}/>
      <Button buttonStyle={"btnplus"} onClick={() => 
    setValue(value + ((increment || increment===0)? increment: 5))}> + </Button> 
      <Button buttonStyle={"btnminus"} onClick={() => 
    setValue(Math.max((value - ((increment || increment===0)? increment: 5)),0))}> - </Button>
    
</div>
)}
