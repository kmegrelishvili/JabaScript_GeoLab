 import React, {useState} from 'react';
import {styles} from './styles'


function Buttons() {
    const [value, setValue] =useState(5);
    const [savedValue, setli] =useState([])
     console.log(savedValue)

 return (
     <div style={styles.Div}>

         <button onClick={() => setValue(value * 5)} style={styles.btn1}> * </button>
         <button  onClick={() => setValue(value / 5)} style={styles.btn2}> / </button>
         <button  onClick={() => setValue(value - 5)} style={styles.btn3}> - </button>
         <button  onClick={() => setValue(value + 5)} style={styles.btn4}> + </button>  
         <p> The Value is {value} </p> 
        <button  onClick={() => setValue(5)} > Reset </button>  
     </div>
     );
}

export default Buttons;