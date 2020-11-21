import React from 'react';
import './App.css';
import MainSection from './components/main-section';
import Navbar from './components/navbar';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <MainSection/>
        <ElevationScroll>
          <Navbar/>
        </ElevationScroll>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
