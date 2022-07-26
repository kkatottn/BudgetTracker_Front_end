import React from "react";

const Main = (props) => {
  return <div>This is main page
    <h1>this is user name: {props.user.name}</h1>
  </div>;
};

export default Main;
