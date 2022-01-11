import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import Flight from './Flight';


function Search() {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('');


    useEffect( async () => {
        if (search) {

            // <Flight flightNumber={search}/>


        }

    }, [search])

    const handleChangeSearch = (event) => {
        const currentValue = event.target.value.toUpperCase();
        setSearch(currentValue);

    }

    return (
        <>
        <div id="searchBar">
            <TextField style={{width: '500px', backgroundColor: "white"}} id="fullWidth" value={search.toUpperCase()} onChange={handleChangeSearch}/>
        </div>
        <div>
            <>
            <Flight flightNumber={search}/>
            </>
        </div>
        </>
    )
}

export default Search;