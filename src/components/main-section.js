import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import '../styles/main-section.css';

const MainSection = () =>{

    return(
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
                
                <div className="arrow-icon">
                    <a>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default MainSection;