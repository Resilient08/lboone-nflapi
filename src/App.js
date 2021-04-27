import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bortles from './pages/Bortles';
import Carr from './pages/Carr';
import Mayfield from './pages/Mayfield'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/bortles' component={Bortles} />
          <Route path='/carr' component={Carr} />
          <Route path='/mayfield' component={Mayfield} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
