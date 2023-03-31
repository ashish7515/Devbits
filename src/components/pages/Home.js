import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Stocklist from '../Stocklist';
import Stockgraph from '../Stockgraph';
import Content from '../Content';
import About from '../About';
import Mapitem from '../Mapitem'

function Home() {
  return (
    <>
      <HeroSection />
      <Stocklist />
      <Content />
      <About />
      <h1 id='search-graph'>Go for search!</h1>
      <div className="graph-container">
        <Stockgraph />
        <br /><br />
      </div>
      
    </>
  );
}

export default Home;
