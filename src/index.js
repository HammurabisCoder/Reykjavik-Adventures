import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// TODOM: Add 404 routing: 
//         https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages
//         also https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing

// TODOM: Make a basic blog

// TODOM: Link between pages

// TODOM: Photos?

// TODOM: Page title, favicon, logo

// TODOM: Do I want react helmet?

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
