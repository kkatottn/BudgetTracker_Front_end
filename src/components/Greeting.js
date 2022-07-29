import React from "react";
import "./Greeting.css"

const Greeting = (props) => {
  return(
    <div>
      <span id="welcome">Welcome, </span>
      <span id="user-name">{props.user.name} !</span>  
    </div>)
}

export default Greeting;