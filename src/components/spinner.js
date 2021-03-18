import React from "react";
import { Dimmer, Loader, Image, Container } from "semantic-ui-react";

const Spinner = () => (
  <div>
    <Container>
      <Dimmer active>
        <Loader size="large">Loading</Loader>
      </Dimmer>
    </Container>
  </div>
);

export default Spinner;
