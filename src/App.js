import React, { useState } from "react";

import Presentation from "./components/presentation";
import MainContent from "./components/main-content";


function App() {
  const [showPresentation, setShowPresentation] = useState(true);

  return showPresentation ? (
    <Presentation setShow={setShowPresentation} />
  ) : (
    <MainContent/>
  );
}

export default App;
