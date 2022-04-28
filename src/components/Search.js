import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Brewery from './Brewery';

function Search() {
    const [breweries, setBreweries] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${search}`);
            console.log(response);
            setBreweries(response.data);
        }
        fetchData();
    }, [search]);

    const loadMore = () => {
        setPage(page+1);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search Breweries"
                value={search}
                onChange={e=>setSearch(e.target.value)}
            />

            {
                breweries.slice(0, page*5).map(
                    (brewery, id) => 
                        <Brewery key={id} name={brewery.name} />
                )
            }

            <button onClick={loadMore}>Load More</button>
        </div>
    )
}

export default Search;