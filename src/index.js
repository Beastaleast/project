import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './SideBar/Button';
import HomePage from './Header/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HomePage/>
    <Button/>
   
  </React.StrictMode>
);


reportWebVitals();
