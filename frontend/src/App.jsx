import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


import TheNavbar from './components/TheNavbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import StoreView from './views/StoreView';
import LoginView from './views/LoginView';
import CheckedView from './views/CheckedView';

import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <TheNavbar/>
        <Routes>
          <Route exact path="/" element = {<HomeView/>} />
          <Route path="/about" element = {<AboutView/>} />
          <Route path="/services" element = {<ServicesView/>} />
          <Route path="/store" element = {<StoreView/>} />
          <Route path="/login" element = {<LoginView/>} />
          <Route path="/checked" element = {<CheckedView/>} />
          <Route path="*" element = {<Navigate replace to="/"/>} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
