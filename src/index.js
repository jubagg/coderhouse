import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {NavBar} from '../src/components/NavBar.js';
import ItemListContainer from '../src/components/ItemListContainer.js';
import ItemDetailContainer from '../src/components/ItemDetailContainer.js';

ReactDOM.render(
  <React.StrictMode>
        <NavBar />
        <ItemDetailContainer />
        <ItemListContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
