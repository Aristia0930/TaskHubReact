import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Path from './path/Path';
import { Provider } from 'react-redux';
import store from './slices/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* store를 Provider로 감싸기 */}
  <BrowserRouter>
    <Path />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
