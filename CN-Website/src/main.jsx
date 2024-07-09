import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './containers/Home.jsx';
import Overview from './containers/Overview.jsx';
import Prizes from './containers/Prizes.jsx';
import PastEvents from './containers/PastEvents.jsx';
import Socials from './containers/Socials.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
