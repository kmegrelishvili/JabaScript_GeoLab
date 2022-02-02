import "./form.css";
import Button from "./Button"
import { useState } from "react/cjs/react.development";

export default function Counter({initialValue, increment}){
    const [value, setValue]=useState(initialValue? initialValue :0)
    console.log(increment)
    return(
<div className="Counter">
    <h3> This is Counter</h3>
    <p> This is {value} </p>
    <Button buttonStyle={"btnplus"} onClick={() => 
    setValue(value + ((increment || increment===0)? increment: 5))}> + </Button>
      <Button buttonStyle={"btnminus"} onClick={() => 
    setValue((value - (increment || 5) > 0)? (value - (increment || 5)) :0)}> - </Button>
    
</div>

    )
}