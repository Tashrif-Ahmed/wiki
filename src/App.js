import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import SearchDetails from './components/SearchDetails/SearchDetails';
import NotFound from './components/NotFound/NotFound';
import Greetings from './components/Greetings/Greetings';

function App() {

  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/post">
            <Post></Post>
          </Route>
          <Route exact path="/">
            <Greetings></Greetings>
          </Route>
          <Route exact path="/result/:productId">
            <SearchDetails></SearchDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <p className="version">Version: 0.2</p>
    </div>

  );
}

export default App;
