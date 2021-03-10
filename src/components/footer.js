import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="logo-container">
          <Header as={Link} to="/">
            Webtry.
          </Header>
        </div>
        <div className="description-container">
            <p> Webtry es un sitio de: pensamientos y poemas en español, que reflejan los sentimientos de su autor. 
                Es un recurso online, que tiene como objetivo la difusión libre de ideas por medio del uso de la escritura.
                El contenido de Webtry pretende: empatizar y sobretodo inspirar a los lectores, de la misma forma que su autor ha sido inspirado por: 
                vivencias y otros recursos a lo largo de su vida.</p>
        </div>
        <div className="bar-container">
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
