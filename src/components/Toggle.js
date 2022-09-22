import React , { useState } from "react";

function Toggle() {
  let [isOn,SetIsOn] =useState(false)
  const handleClick=()=>{
    SetIsOn((isOn)=!isOn)
    
  }
  const color = isOn ? 'red' : 'white'
  return <button  style ={{background:color }} onClick={handleClick}>{isOn ? "ON" :"OFF"}</button>;
  
}

export default Toggle;
