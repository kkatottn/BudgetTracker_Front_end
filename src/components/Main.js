import React from "react";
import "./Main.css";

const Main = (props) => {
  return <div id="main">
    <header>Kash Note</header>
    <main>
      This is main page
      <h1>this is user name: {props.user.name}</h1>
    </main>
    <footer>This is footer</footer>
  </div>;
};

export default Main;


