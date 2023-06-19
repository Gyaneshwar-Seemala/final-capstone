import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

export default function Specials(props) {
  return (
    <div>
      <div className="container" id="inspec">
        <div className="row">
          <img src={props.image} alt={props.title} className="img-fluid" width={50} />
        </div>
        <div className="row">
          <h3>{props.title}</h3>
          <h3 style={{ color: '#F42F14' }}>{props.price}</h3>
        </div>
        <div className="row">
          <p>{props.description}</p>
        </div>
        <div className="row" id="button">
          <Link
            to="/order-online"
            style={{
              color: 'black',
              fontSize: '30px',
              fontWeight: 500,
              textDecoration: 'none', // Remove underline
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop:20
            }}
          >
            <h4>
              Order Now.....<img alt="delivery icon" src="https://w7.pngwing.com/pngs/702/495/png-transparent-doorstep-delivery-computer-icons-others-miscellaneous-silhouette-area.png" width={40} height={40} />
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
