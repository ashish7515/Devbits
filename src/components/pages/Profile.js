import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Profilecard from '../Profilecard';
import './Pages.css';

export default function Profile() {
  return (
    <>
      <div className="profile-card">
        <div className="aaa">
          <Profilecard />

        </div>
      </div>
    </>
  )

}


