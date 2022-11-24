import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Dashboard />} />
      <Route path="blogs" element={<Dashboard />} />
      <Route path="contact" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Route>
  </Routes>
</Router>
);
