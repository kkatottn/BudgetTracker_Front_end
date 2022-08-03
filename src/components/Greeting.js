import React from "react";
import "./Greeting.css"

const Greeting = (props) => {
  return(
    <div id="welcome">
      {/* <span id="welcome">Welcome, </span>
      <span id="user-name">{props.user.name} !</span>   */}
      <p>Welcome, {props.user.name}!</p>
    </div>)
}

export default Greeting;