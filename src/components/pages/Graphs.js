import React from 'react';
import '../../App.css';
import Stockgraph from '../Stockgraph';

function Graphs() {
  return (
    <>
      <h1 className='Graphs'>StockGraphs</h1>;
      <div className="graph-container">
        <div>
        <Stockgraph />

        </div>
      </div>
    </> 
  );
}

export default Graphs;