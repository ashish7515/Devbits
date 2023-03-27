import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Stocks.css'


function Stockitem(props) {
  
  return (
    <>
      <li className='stock_item' >
        <Link className='stock_item_link' to={props.path}>
          <div className="stock_item_body">
            <div className="stock_item_name">
                <h2>{props.name}</h2>
            </div>
            <div className="stock_price">
                <div className="stock_values">
                  <p> Price {props.avg_value}</p>
                </div>
                <div className="stock_values">
                  <p>Total Value {props.tot_value}</p>
                </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Stockitem;
