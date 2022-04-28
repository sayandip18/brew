import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Search() {
    const [breweries, setBreweries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${search}`);
            console.log(response);
            setBreweries(response.data);
        }
        fetchData();
    }, [search])

    return (
        <div>
            <input
                type="text"
                placeholder="Search Breweries"
                value={search}
                onChange={e=>setSearch(e.target.value)}
            />

            {
                breweries.map(
                    (brewery, id) => <div key={id}>
                        {brewery.name}
                    </div>
                )
            }

        </div>
    )
}

export default Search;