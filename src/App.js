import React from "react";

import Presentation from "./components/presentation";
import MainContent from "./components/main-content";
import PoemList from "./components/poem-list";
import "semantic-ui-css/semantic.min.css";

function App() {
  return localStorage.getItem("presentationShowed") ? (
    <MainContent>
      <PoemList />
    </MainContent>
  ) : (
    <Presentation />
  );
}

export default App;
