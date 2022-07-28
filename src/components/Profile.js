import React from "react";
import "./Profile.css";

const Profile = (props) => {
  return(<div> 
    <h1>This is {props.user.name}'s profile</h1>
    </div>);
}

export default Profile;