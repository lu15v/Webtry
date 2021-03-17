import React from "react";
import Presentation from "./components/presentation";
import MainContent from "./components/main-content";
import PoemList from "./components/poem-list";
import {Provider} from "./context/context";

import "semantic-ui-css/semantic.min.css";

function App() {
  return localStorage.getItem("presentationShowed") ? (
    <Provider>
      <MainContent>
        <PoemList />
      </MainContent>
    </Provider>
  ) : (
    <Presentation />
  );
}

export default App;
