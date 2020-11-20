import './App.css';
import MainSection from './components/main-section';
import Navbar from './components/navbar';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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



function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <MainSection/>
        <Navbar/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
