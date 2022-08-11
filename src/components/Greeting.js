import React from "react";
import "./Greeting.css"

const Greeting = (props) => {
  return(
    <div id="welcome">
      <p>Welcome, {props.user.name}!</p>
    </div>)
}

export default Greeting;