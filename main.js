import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './src/App';
import user from './src/model/user';

const root = document.getElementById('app');
ReactDom.render(<App user={ user } />, root);
