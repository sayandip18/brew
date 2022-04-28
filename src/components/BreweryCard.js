import React from 'react';
import {Link} from 'react-router-dom';

function BreweryCard(props) {
  console.log(props.id);
  return (
    <div>
      {props.name}
      <Link to={`/brewery/${props.id}`}>Show Details</Link>
    </div>
  )
}

export default BreweryCard;