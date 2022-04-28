import React from 'react';
import {Link} from 'react-router-dom';

import './BreweryCard.css';

function BreweryCard(props) {
  return (
    <div className="card">
      <div className="name">
        {props.name}
      </div>
      <Link to={`/brewery/${props.id}`}>Show Details</Link>
    </div>
  )
}

export default BreweryCard;