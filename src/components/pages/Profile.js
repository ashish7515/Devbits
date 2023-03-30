import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Profilecard from '../Profilecard';
import './Pages.css';
import Stocktable from '../Stockstable';

export default function Profile() {
  return (
    <>
      <div className="profile-card">
        <div className="aaa">
          <Profilecard />
        </div>
        <div className="stockstable">
          <Stocktable />
        </div>
      </div>
    </>
  )

}


