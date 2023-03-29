import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Stocklist from '../Stocklist';
import AboutUs from '../AboutUs';
import Stockgraph from '../Stockgraph';

function Home() {
  return (
    <>
      <HeroSection />
      <Stocklist />
      <AboutUs />
      <div className="graph-container">
        <Stockgraph />
      </div>
    </>
  );
}

export default Home;
