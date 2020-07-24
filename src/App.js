import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Works from './components/Works'
import About from './components/About'
import Contact from './components/Contact'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/works">
          <Works/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
