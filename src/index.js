import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './services/Provider';

const theme = {
  buttonText: 'rgb(245, 245, 245)',
  headerText: 'rgb(245, 245, 245)',
  projectLink: 'magenta',
  projectLinkHover: 'hsl(300, 100%, 80%)',

  // Dark mode colors

  backgroundDark: 'hsl(0, 0%, 8%)',
  backgroundProjectDark: 'rgba(40, 40, 40, 0.711)',
  buttonDark: '#6b63ff',
  headerDark: 'black',
  purpleDark: '#6b63ff',
  textDark: '#ccc',
  transitionLinearDark: 'linear-gradient(0deg, hsl(0, 0%, 8%) 0%, hsl(0, 0% ,12%) 20%, hsl(0, 0%,10%) 80%, hsl(0, 0%, 8%) 100%)',

  // Light mode colors

  backgroundLight: 'rgb(245, 245, 245)',
  backgroundProjectLight: 'rgba(0, 0, 0, 0.767)',
  buttonLight: '#cac7ff',
  headerLight: 'hsl(0, 0%, 40%)',
  purpleLight: '#cac7ff',
  textLight: 'hsl(0, 0%, 8%)',
  transitionLinearLight: 'linear-gradient(0deg, rgba(31,31,31,0) 0%, rgba(230,230,230,1) 20%, rgba(230,230,230,1) 80%, rgba(54,54,54,0) 100%)',

};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
