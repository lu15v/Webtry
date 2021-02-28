import React, { useState } from "react";

import Presentation from "./components/presentation";
import MenuBar from "./components/menu-bar";

import 'semantic-ui-css/semantic.min.css'

function App() {
  const [showPresentation, setShowPresentation] = useState(true);

  return (
    showPresentation ? (
        <Presentation setShow={setShowPresentation} />
      ) : (
        <MenuBar />
    )
  );
}

export default App;
