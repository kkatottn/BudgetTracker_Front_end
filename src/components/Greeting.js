import React from "react";
import "./Greeting.css";
import PropTypes from 'prop-types';

const Greeting = (props) => {
  return(
    <div id="welcome">
      <p>Welcome, {props.user.name}!</p>
    </div>)
}

Greeting.propTypes = {
  user: PropTypes.object.isRequired
}
export default Greeting;