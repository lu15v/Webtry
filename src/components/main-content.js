import React, { useState } from "react";

import Presentation from "./presentation";

const MainContent = () => {
  const [showPresentation, setShowPresentation] = useState(true);

  return showPresentation ? (
    <Presentation setShow={setShowPresentation}/>
  ) : (
    <div>
      <p>this is the main content here</p>
    </div>
  );
};

export default MainContent;
