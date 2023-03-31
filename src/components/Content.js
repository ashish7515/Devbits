import React from 'react'
import './Content.css'
import '../App.css'
// import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/html";
// import { AxiosRequestConfig } from 'axios';


const Content = () => {

  return (
    <>
    <div className="about_us">
    </div>
    <div className="about">
      <div className="about-container">
        <div className="about-card">
          <img src="https://bitcoin.org/img/icons/ico_individuals.svg?1680008882" alt="" /><br />
          <h1 className='about-cardh1'>Individuals</h1>
          <h2 className='about-cardh2'>Learn more</h2>
        </div>
        <div className="about-card">
          <img src="https://bitcoin.org/img/icons/ico_business.svg?1680008882" alt="" /><br />
          <h1 className='about-cardh1'>Businesses</h1>
          <h2 className='about-cardh2'>Learn more</h2>
        </div>
        <div className="about-card">
          <img src="https://bitcoin.org/img/icons/ico_developers.svg?1680008882" alt="" /><br />
          <h1 className='about-cardh1'>Developers</h1>
          <h2 className='about-cardh2'>Learn more</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Content;