import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import StoreView from './views/StoreView';
import LoginView from './views/LoginView';

import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" component = {HomeView} />
          <Route path="/about" component = {AboutView} />
          <Route path="/services" component = {ServicesView} />
          <Route path="/store" component = {StoreView} />
          <Route path="/login" component = {LoginView} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
