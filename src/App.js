import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import FeaturedVideo from './pages/FeaturedVideo/FeaturedVideo'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/:videoID">  
            <FeaturedVideo/>
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
