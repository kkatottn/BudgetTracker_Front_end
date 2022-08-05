import React from "react";
import "./Landing.css";
import News from './News.js'
import logo from "../images/KashnoteLogo.png";

const Landing = () => {
  return (
    <div id="landing">
      <div id="header">
        <img id="logo" src={logo} alt="Kash Note Logo"/>
        <span id="kashnote">Kash Note</span>
        </div>
      <main>
        <div className="login-container">
          <p className="quote">Beware of little expenses. 
          <br/>A small leak will sink a great ship.</p>
          <p className="person">— Benjamin Franklin</p>
          <div id="signIn">
            <p className="login-text">Start saving with KashNote</p>
            <div id="gmailSignIn"></div>
          </div>
          
        </div>
        <div className="news-container">
          <News/>
        </div>
      </main>
      <footer>This is footer</footer>
    </div>
  );
};

export default Landing;
