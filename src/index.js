import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.min.css';
import { BrowserRouter, withRouter } from 'react-router-dom'
const WithHomeRouter = withRouter(App)

ReactDOM.render(
  <BrowserRouter>
    <WithHomeRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
