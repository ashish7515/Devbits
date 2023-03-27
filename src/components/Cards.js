import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Cards.css';
import CardItem from './CardItem';

// const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/AAPL',
  headers: {
    'X-RapidAPI-Key': '236551598cmsh041c79dc13535cep1cb297jsn0344bd0922e5',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  }
};

function Cards() {
  const [value, setValue] = useState("backendCRASHERS");

  useEffect(() => {
    axios.request(options).then(function (response) {
      // console.log(response.data);
      setValue((response.data.item));
      // console.log(value);
    }).catch(function (error) {
      console.error(error);
    });
    //Runs only on the first render
  }, []);

  return (
    <div className='cards'>
      <div className="card-heading-title">
        <h1>Market Insights: The Latest News and Analysis from the World of Stocks</h1>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW52ZXN0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              path={value[0].link}
              description={value[0].description}
              title={value[0].title}
            />
            <CardItem
              src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW52ZXN0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              path={value[1].link}
              description={value[1].description}
              title={value[1].title}
            />
            <CardItem
              src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              path={value[2].link}
              description={value[2].description}
              title={value[2].title}
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              path={value[3].link}
              description={value[3].description}
              title={value[3].title}
            />
            <CardItem
              src='https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              path={value[4].link}
              description={value[4].description}
              title={value[4].title}
            />
            <CardItem
              src='https://images.unsplash.com/photo-1557597808-1f8084422cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              path={value[5].link}
              description={value[5].description}
              title={value[5].title}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              path={value[6].link}
              description={value[6].description}
              title={value[6].title}
            />
            <CardItem
              src='https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              path={value[7].link}
              description={value[7].description}
              title={value[7].title}
            />
            <CardItem
              src='https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxpbnZlc3RtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              path={value[8].link}
              description={value[8].description}
              title={value[8].title}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
