import React from "react";
import "./Main.css";
import Profile from "./Profile.js"

const Main = (props) => {
  return <div id="main">
    <header>Kash Note</header>
    <main>
      {/* This is main page */}
      <div id="profile">
        <Profile user={props.user}/>
        </div>
      <div id="extra-feature">
      </div>
    </main>
    <footer>This is footer</footer>
  </div>;
};

export default Main;


