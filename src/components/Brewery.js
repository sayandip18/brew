import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Brewery({match}) {
    const { breweryId } = useParams();
    
    return (
        <div>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Brewery;