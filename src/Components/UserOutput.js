import React from "react";
import "./output.css"

const userOutput = (props) => {
  return(
    <div className="Output">
    <p>Username: {props.userName} </p>
    <p>It is just random text! </p>
  </div>
  )
}

export default userOutput;