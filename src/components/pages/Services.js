import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import Stockitem from '../Stockitem';
import '../Stockitem.css';
import './Pages.css';



const options = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/v1/sec/form4',
  headers: {
    'X-RapidAPI-Key': '236551598cmsh041c79dc13535cep1cb297jsn0344bd0922e5',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  }

}




export default function Services() {
  const [Price, setPrice] = React.useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setPrice((response.data.form_4_filings));
      console.log(Price);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  // console.log(props.name);
  const API_KEY = '1QNWA30TWRMAJXHZ';
  let StockSymbol = "AAPL";
  let API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${StockSymbol}&apikey=${API_KEY}`

  fetch(API_Call)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (data) {
        console.log("jo chahiye tha");
        console.log(data);
      }
    )


  return (
    <>
      
      {/* <h1 className='services'>SERVICES</h1> */}

      <div className="demo-head">
        <h1 id='a111'>Where the world does markets</h1>
        <h2 id='a222'>Join 50 million traders and investors taking the future into there own heands.</h2>
      </div>
      <div className="demo-head-2">
        <h1>Listed Stocks</h1>
      </div>
      <div className="stocks_container">
        <div className="stocks_wrapper">
          <ul className="stocks_items">
            {Price.map((item) => (
              <div>
                <Stockitem
                  path="/graph"
                  name={item.symbol}
                  avg_value={item.aveg_pricePerShare}
                  tot_value={item.tot_value}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );


}


// import React from 'react';
// import Plot from 'react-plotly.js';

// class Services extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: []
//     }
//   }

//   componentDidMount() {
//     this.fetchStock();
//   }

//   fetchStock() {
//     const pointerToThis = this;
//     console.log(pointerToThis);
//     const API_KEY = '1QNWA30TWRMAJXHZ';
//     let StockSymbol = 'NVCT';
//     let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&apikey=${API_KEY}`
//     // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=full&apikey=${API_KEY}`;
//     // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];

//     fetch(API_Call)
//       .then(
//         function(response) {
//           return response.json();
//         }
//       )
//       .then(
//         function(data) {
//           console.log(data);

//           for (var key in data['Time Series (5min)']) {
//             stockChartXValuesFunction.push(key);
//             stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
//           }

//           // console.log(stockChartXValuesFunction);
//           pointerToThis.setState({
//             stockChartXValues: stockChartXValuesFunction,
//             stockChartYValues: stockChartYValuesFunction
//           });
//         }
//       )
//   }

//   render() {
//     return (
//       <div>
//         <h1>Stock Market</h1>
//         <Plot
//           data={[
//             {
//               x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//               type: 'scatter',
//               mode: 'lines+markers',
//               marker: {color: 'red'},
//             }
//           ]}
//           layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
//         />
//       </div>
//     )
//   }
// }

// export default Services;


// TradingViewWidget.jsx













