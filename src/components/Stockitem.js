import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from 'react';

export default function Stockitem(props) {
  // console.log(props.name);
  // const API_KEY = '1QNWA30TWRMAJXHZ';
  // let StockSymbol = props.name;
  // let API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${StockSymbol}&apikey=${API_KEY}`

  // fetch(API_Call)
  //   .then(
  //     function (response) {
  //       return response.json();
  //     }
  //   )
  //   .then(
  //     function (data) {
  //       // console.log("jo chahiye tha");
  //       // console.log(data);
  //     }
  //   )




    
  return (
    <>
      <li className="stock_item">
        <Link className='stock_item_link' to={props.path}>
          <Card className="w-110" >
            {/* <CardHeader color="blue" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1680003210401-08fa173ee905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader> */}
            <CardBody className="text-left">
              <Typography variant="h2" className="mb-2">
                {props.name}
              </Typography>
              <Typography variant="h4" className="stock-para">
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between pt-3 mx-1">
              <Typography variant="h4" className="stock-prices">Price per share : {props.avg_value} <br /> Total shares : {props.tot_value}</Typography>
              {/* <Typography variant="medium" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[5px]" />
                Barcelona, Spain
              </Typography> */}
            </CardFooter>
          </Card>
        </Link>
      </li>
    </>
  );
}