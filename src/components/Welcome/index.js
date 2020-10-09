import React from "react";
import "./styles.css";

import purpleCircle from "../../assets/purpleCircle.svg";
import orangeCircle from "../../assets/orangeCircle.svg";
import blueCircle from "../../assets/blueCircle.svg";
import redCircle from "../../assets/redCircle.svg";
import menuNavIcon from "../../assets/menuNavIcon.svg";

function Welcome() {
  return (
    <div className="container">
      <div className="menu-nav">
        <div className="menu-nav-text">
          <h4 className="menu-header-logo">Floows</h4>
        </div>

        <div className="menu-nav-icon">
          <img src={menuNavIcon} />
        </div>

        <div className="menu-nav-intext">
          <span className="menu-nav-text">We </span>
          <span className="menu-nav-text"> love</span>
          <span className="menu-nav-text"> You</span>
        </div>
      </div>

      <div className="content">
        <div className="intro-text">
          <span>Nós criamos</span>
          <br />
          <span>experiências</span>
        </div>

        <div className="main-circles">
          <div className="mini-circles">
            <img src={purpleCircle} className="purple-circle" />
            <img src={orangeCircle} className="orange-circle" />
            <img src={blueCircle} className="blue-circle" />
            <img src={redCircle} className="red-circle" />
          </div>
          <div className="button">Iniciar</div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
