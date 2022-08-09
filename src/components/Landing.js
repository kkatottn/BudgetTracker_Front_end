import React from "react";
import "./Landing.css";
import logo from "../images/Nowhite.png";

const Landing = (props) => {
  
  let newsImages = null;
  if (props.news){
    newsImages = props.news.map((n) => {
      return <a href={n.url} target="_blank" rel="noreferrer"><img class="news-image" src={n.image} alt="news_image"></img></a>
    });
  };

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
          </div>
        </div>
        <div className="news-container">
          {newsImages}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Landing;
