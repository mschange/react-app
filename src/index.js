import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Router from './router'
import * as serviceWorker from './serviceWorker';

// 引入redux
import { Provider } from 'react-redux';
// 引入store
import store from './store';

// 引入iconfont
import "./assets/iconfont/iconfont.css";
// 引入antd-mobile
import 'antd-mobile/dist/antd-mobile.css'; 
ReactDOM.render(
  <Provider store={ store }>
    <Router />
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
