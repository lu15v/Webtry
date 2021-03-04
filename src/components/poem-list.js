import React from "react";
import PoemCard from "./poem-card";

import "../styles/poem-list.css";

const PoemList = () => {
  return (
    <div className="poem-list-container">
      <PoemCard />
      <PoemCard />
      <PoemCard />
      <PoemCard />
      <PoemCard />
      <PoemCard />
    </div>
  );
};

export default PoemList;
