import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import SignUp from './components/pages/SignUp';
import Marketnews from './components/pages/Marketnews';
import Footer from './components/Footer';
import Stockgraph from './components/pages/Stockgraph';
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
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Marketnews' component={Marketnews} />
          <Route path='/Services/Stockgraph' component={Stockgraph} />
          {/* </Routes> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
