import React from 'react';
import ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './app/app';
import { HashRouter } from 'react-router-dom'
import {store} from "./services/store";
import {Provider} from "react-redux";

const container = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(container!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
