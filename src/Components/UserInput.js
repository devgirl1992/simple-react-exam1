import React from "react";
import "./input.css"

const userInpout = (props) => {
  return(
    <div className="Input">
      
     <input className="inputFild" type="text" id="username" onChange={props.change} value={props.currentName}></input>
    </div>
    
  )
}

export default userInpout;


// value={props.currentName}