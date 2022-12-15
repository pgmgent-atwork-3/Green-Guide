import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import Rewards from './pages/Rewards';
import Home from './pages/Home';
import Login from './pages/Login';
import Reports from './pages/Reports';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './pages/Signup';
import Labels from './pages/Labels';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  // //get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IklnbmF0aXVzIiwiaWF0IjoxNjcxMDk1ODc1LCJleHAiOjE2NzEwOTc2NzV9.W5BSSwArby61EOfJBmFZLgtWx2HjEN9q8g26gQ9KeD0"
  // //return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign-up" element={<Signup />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/rewards" element={<Rewards />}/>
        <Route path="/labels" element={<Labels />}/>
        <Route path="/reports" element={<Reports />}/>
      </Routes>
    </Router>
  </ApolloProvider>
);
