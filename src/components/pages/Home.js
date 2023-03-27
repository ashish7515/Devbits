import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Stocklist from '../Stocklist';
import AboutUs from '../AboutUs';

function Home() {
  return (
    <>
      <HeroSection />
      <Stocklist />
      <AboutUs />
    </>
  );
}

export default Home;
