import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import Rewards from './pages/Rewards';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/rewards" element={<Rewards />}/>
  </Routes>
</Router>
);
