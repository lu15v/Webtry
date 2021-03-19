import React from "react";
import { Dimmer, Loader, Container } from "semantic-ui-react";

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
