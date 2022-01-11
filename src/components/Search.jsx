import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useEffect } from 'react';


function Search() {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('');


    useEffect( async () => {
        if (search) {
            console.log(search);
        }

    }, [search])

    const handleChangeSearch = (event) => {
        const currentValue = event.target.value.toLowerCase();
        setSearch(currentValue);

    }

    return (
        <>
        <div id="searchBar">
            <TextField style={{width: '500px', backgroundColor: "white"}} id="fullWidth" value={search} onChange={handleChangeSearch}/>
        </div>
        </>
    )
}

export default Search;