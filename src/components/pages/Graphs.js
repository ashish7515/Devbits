import React from 'react';
import '../../App.css';
import Stockgraph from '../Stockgraph';

function Graphs() {
  return (
    <>
      <h1 className='Graphs'>StockGraphs</h1>
      <div className="graph-container">
        <Stockgraph />
      </div>
    </> 
  );
}

export default Graphs;