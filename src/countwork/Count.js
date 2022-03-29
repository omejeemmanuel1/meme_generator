import React, { useState } from "react";
import './Count.css'

export default function Count() {
    
    const [count, setCount] = useState(0)

   function add() {
       setCount (prevCount => prevCount + 1)
   }
   
   function substract() {
       setCount (prevCount => prevCount - 1)
   }

    return (
        <div className="count">
            <button className="counter--minus" onClick={substract}>-</button>
            <p className="counter--center">{count}</p>
            <button className="counter--add" onClick={add}>+</button>
        </div>
    )
}
