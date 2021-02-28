import React from "react";
import PoemCard from "./poem-card";

import "../styles/main-content.css";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <PoemCard />
      <PoemCard />
      <PoemCard />
      <PoemCard />
      <PoemCard />
      <PoemCard />
    </div>
  );
};

export default MainContent;
