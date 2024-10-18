import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './services/Provider';

const theme = {
  buttonText: '#FEFEFF',
  headerText: '#FEFEFF',
  projectLink: 'rgba(290,103,95,1)',
  projectLinkHover: 'rgba(290,103,95,1)',

  // Dark mode colors

  backgroundDark: 'linear-gradient(180deg, rgba(12,22,34,1) 30%, rgba(45,45,45,1) 100%)',
  backgroundProjectDark: 'linear-gradient(180deg, rgba(12,22,34,1) 30%, rgba(45,45,45,1) 100%)',
  buttonDark: '#FEFEFF',
  headerDark: 'linear-gradient(35deg, rgba(12,22,34,1) 40%, rgba(250,103,95,1) 100%)',
  purpleDark: 'rgba(290,103,95,1)',
  textDark: 'rgba(290,103,95,1)',
  transitionLinearDark: 'linear-gradient(100deg, rgba(250,103,95,1) 80%), rgba(12,22,34,1) 70%',

  // Light mode colors

  backgroundLight: '#FEFEFF',
  backgroundProjectLight: 'rgba(0, 0, 0, 0.767)',
  buttonLight: 'rgba(290,103,95,1)',
  headerLight: 'linear-gradient(35deg, hsl(0, 0%, 40%) 30%, rgba(250,103,95,1) 100%)',
  purpleLight: 'rgba(290,103,95,1)',
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
