import React, {useState, useEffect} from 'react';
import axios from 'axios';

import BreweryCard from '../breweryCard/BreweryCard';
import './Search.css';

function Search() {
    const [breweries, setBreweries] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${search}`);
            // console.log(response);
            setBreweries(response.data);
        }
        fetchData();
    }, [search]);

    const loadMore = () => {
        setPage(page+1);
    }

    return (
        <div className="search">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search Breweries"
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                    className="txt-input"
                />
            </div>

            {
                breweries.slice(0, page*5).map(
                    (brewery) =>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <BreweryCard key={brewery.id} name={brewery.name} id={brewery.id} />
                        </div>
                )
            }

            <div className="btn-container">
                <button className="btn" onClick={loadMore}>Load More</button>
            </div>
        </div>
    )
}

export default Search;