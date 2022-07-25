import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div id="landing">
      <header>Kash Note</header>
      <main>
        <div className="login-container">
          <div id="signIn"></div>
        </div>
        <div className="extra-container"></div>
      </main>
      <footer>This is footer</footer>
    </div>
  );
};

export default Landing;
