import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css' ;  
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { CssBaseline } from '@mui/material';
import reportWebVitals from './reportWebVitals';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A66C2',
    },
    secondary: {
      main: '#333',
    },
    background: {
      default: "#F4F2EE",
    }
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
