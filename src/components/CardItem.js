import React from 'react';
// import { Link } from 'react-router-dom';

function CardItem(props) {

  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path} target='_blank'>
          <div className="card">
            <div className="card__image">
              <img src={props.src} />
            </div>
            <div className="card__copy">
              <h1>{props.title}</h1>
              {/* <h2>27 October, Noon.</h2> */}
              <br />
                <div className="card-description">
                  <p>
                    {props.description}
                  </p>
                </div>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
