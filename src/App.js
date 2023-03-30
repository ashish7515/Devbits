import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import Marketnews from './components/pages/Marketnews';
import Footer from './components/Footer';
import Graphs from './components/pages/Graphs';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Routes> */}
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/profile' component={Profile} />
          <Route path='/signin' component={SignIn} />
          <Route path='/news' component={Marketnews} />
          <Route path='/graph' component={Graphs} />
          {/* </Routes> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
