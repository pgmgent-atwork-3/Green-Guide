import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import Rewards from './pages/Rewards';
import Home from './pages/Home';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IklnbmF0aXVzIiwic3ViIjoxLCJyb2xlIjoic3VwZXJBZG1pbiIsImlhdCI6MTY3MTExMTIzMywiZXhwIjoxNjcxMTE0ODMzfQ.q8k49PHWRRQpoqS6EP_RADlHuYSmQLjEMtleKydKG2s"
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
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>
  </ApolloProvider>
);
