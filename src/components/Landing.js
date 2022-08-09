import React from "react";
import "./Landing.css";
import News from './News.js'
import logo from "../images/Nowhite.png";

const Landing = () => {
  return (
    <div id="landing">
      <div id="header">
        <div>
          <img id="logo" src={logo} alt="Kash Note Logo"/>
          <span id="kashnote">Kash Note</span>
        </div>
      </div>
      <main>
        <div className="login-container">
          <p className="quote">Beware of little expenses. 
          <br/>A small leak will sink a great ship.</p>
          <p className="person">— Benjamin Franklin</p>
          <div id="signIn">
            <div id="gmailSignIn"></div>
          </div>
          
        </div>
        <div className="news-container">
          <News/>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Landing;
