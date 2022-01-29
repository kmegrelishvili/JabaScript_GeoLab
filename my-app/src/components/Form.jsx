import Button from "./Button"
import "./style.css"
import React, {useState}  from "react"

 
export default function Forms ({   
    formStyle,
    ...props})
    { 

    const [value, setValue]= useState('Room')
    function HandleChange(e){
        setValue(e.target.value)
        }
        return (
            <div className="wrapper"> 
           
            <label> {value}  </label>
            <div className="btns">
            <input type="text" onChange={HandleChange} placeholder="Room" className={`btn ${formStyle ? formStyle:""}`}/>
           

            <Button onClick={() => {
                alert("Input data is " + value)
                console.log(value)
            }}>
            Submit <img className='logo' src="icons8.png"/>
            </Button>
            </div>
            </div>
        )
}

