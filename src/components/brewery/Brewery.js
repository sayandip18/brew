import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Brewery({match}) {
    const { breweryId } = useParams();
    const [info, setInfo] = useState();

    useEffect(() => {
        async function fetchData() {
            console.log(breweryId)
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/${breweryId}`);
            setInfo(response.data);
            console.log(info);
            console.log(breweryId);
        }
        fetchData();
    }, []);
    
    return (
        <div>
            {info.name}
            {info.brewery_type}
            {info.city}
            {info.state}
            {info.country}
            <Link to="/">Back</Link>
        </div>
    )
}

export default Brewery;