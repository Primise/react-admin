import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd'
import zh_CN from "antd/es/locale/zh_CN"
import {Provider} from 'react-redux'
import store from './store'
import './index.css';



const AppRoot = (
  <ConfigProvider locale={zh_CN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
)
ReactDOM.render(AppRoot, document.getElementById('root'));

