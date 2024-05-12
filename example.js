import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Weather from './weather.js';
import './style.scss';
import { useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);
export default function BasicExample() {
  return (
    <Provider store={store}>
      <Router>
        <Links />
        <App />
      </Router>
    </Provider>
  );
}

function Links() {
  const [isOpen, openMenu] = useState(false);

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/weather">weather</Link>
      </li>
      <li>
        <Link to="/home/one">Home One</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route path="/weather">
          <Weather style="width:400px;height:400px" />
        </Route>
        <Route path="/home/one">
          <h1>Home One</h1>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
