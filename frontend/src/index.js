import React from 'react';
import ReactDOM from 'react-dom/client';
import 'web-vitals'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'skitter-slider/dist/skitter.css';
import 'skitter-slider/dist/jquery.skitter.js';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import './index.css';
import './assets/styles/index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
        
     < App/>
     
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
