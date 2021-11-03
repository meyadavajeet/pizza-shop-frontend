import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
