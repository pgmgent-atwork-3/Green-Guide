import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard";
import Rewards from "./pages/Rewards";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Labels from "./pages/Labels";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3001",
  },
  credentials: "include",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  </ApolloProvider>
);
