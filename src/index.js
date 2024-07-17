import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  HashRouter } from 'react-router-dom';
import { PlayerContextProvider } from './context/PlayerContext';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
    </Provider>
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
