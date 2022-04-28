import React from 'react';
import {Link} from 'react-router-dom';

function Brewery({name}) {
  return (
    <div>
        {name}
        <Link to="/">Back</Link>
    </div>
  )
}

export default Brewery;