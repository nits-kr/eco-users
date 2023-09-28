import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import "bootstrap/dist/js/bootstrap.js";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'ion-rangeslider';
import 'slick-carousel';

//
// import * as React from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app/Store';
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
