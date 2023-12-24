import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AppProvider>
  <Router>
    <App />  
  </Router>
  </AppProvider>
);
