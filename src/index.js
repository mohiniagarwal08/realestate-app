import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';
import store from './Components/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-hp1kfoo10lxz2mzv.us.auth0.com"
    clientId="Su1c01Wc3t4H2h6b1TL71o3iiLR28QSy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <Provider store={store}>
      <App />
    </Provider>

  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
