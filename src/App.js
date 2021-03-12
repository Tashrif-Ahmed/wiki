import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Search from './components/Search/Search';

function App() {

  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/search">
            <Search></Search>
          </Route>
        </Switch>


      </Router>
      <p className="version">Version: 0.1</p>
    </div>

  );
}

export default App;
