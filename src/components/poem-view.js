import React from "react";
import { Grid } from "semantic-ui-react";

import MainContent from "./main-content";

import "../styles/poem-view.css";

const PoemView = () => {
  return (
    <MainContent>
      <Grid>
        <Grid.Column width={8} className="poem-view-container">
          <h3>Creo que aveces te extrano</h3>
        </Grid.Column>
        <Grid.Column width={4} className="poem-view-container">
          <h3>Creo que aveces te extrano</h3>
        </Grid.Column>
      </Grid>
    </MainContent>
  );
};

export default PoemView;
