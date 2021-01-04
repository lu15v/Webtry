import React from 'react';
import './App.css';
import MainSection from './components/main-section';
import PoemSection from './components/poem-section';
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

const PoemSections = [
  {
    'name' : 'Para el alma',
    'poems': [
      {
        'title': 'Demo Poem',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        'title': 'Demo Poem 2',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        'title': 'Demo Poem 3',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        'title': 'Demo Poem 4',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        'title': 'Demo Poem 5',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        'title': 'Demo Poem 6',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }
    ]
  },
  {
    'name' : 'Para el corazon',
    'poems': []
  }

]


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
        {PoemSections.map((obj, index) =>{
          return <PoemSection key={index} poems={obj.poems}/>
        })}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
