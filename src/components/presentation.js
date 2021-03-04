import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/presentation.css";

const Presentation = () => {
  let history = useHistory();

  function getIn(){
    localStorage.setItem("presentationShowed", true)
    history.push("/");
  }

  return (
    <div className="hero hero-picture">
      <div className="hero-text">
        <h1 className="main-title">
          <p className="title-letter-animation-1">W</p>
          <p className="title-letter-animation-2">e</p>
          <p className="title-letter-animation-3">b</p>
          <p className="title-letter-animation-4">t</p>
          <p className="title-letter-animation-5">r</p>
          <p className="title-letter-animation-6">y</p>
        </h1>
        <p className="slogan">Donde las palabras tocan el alma</p>

        <div className="enter-site-container" onClick={() => getIn()}>
          <FontAwesomeIcon className="arrow-left" icon={faChevronRight} />
          <p>Enter to the site</p>
          <FontAwesomeIcon className="arrow-right" icon={faChevronLeft} />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
