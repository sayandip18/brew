import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import './Brewery.css';

function Brewery() {
    const { breweryId } = useParams();
    const [info, setInfo] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/${breweryId}`);
            setInfo(response.data);
        }
        fetchData();
    }, []);

    if(!info) return <>Loading...</>;

    return (
        <div className="container">
            <div className="info-container">
                <div className="info">
                    Name: {info.name}
                </div>
            </div>
            <div className="info-container">
                <div className="info">
                    Type: {info.brewery_type}
                </div>
            </div>
            <div className="info-container">
                <div className="info">
                    City: {info.city}
                </div>
            </div>
            <div className="info-container">
                <div className="info">
                    State: {info.state}
                </div>
            </div>
            <div className="info-container">
                <div className="info">
                    Country: {info.country}
                </div>
            </div>
            
            <div className="btn-container">
                <button className="button">
                    <Link to="/" style={{textDecoration: 'none'}}>Back</Link>
                </button>
            </div>
            
            
        </div>
    )
}

export default Brewery;