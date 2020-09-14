import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Video from './pages/Video/ Video'
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/video">
            <Video/>
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
