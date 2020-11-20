import './App.css';
import Header from './components/header';
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
        <Header/>
        <Navbar/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
