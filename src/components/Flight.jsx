import airlines from '../airlines.json';

import { useState } from "react";
import { useEffect } from "react";


function Flight(props) {
    const [alpha, setAlpha] = useState('');
    const [numeric, setNumeric] = useState('');

    const flightNumber = props.flightNumber;

    useEffect( async () => {
        setAlpha(flightNumber.split(/[0-9]/)[0])
        setNumeric(flightNumber.match(/[0-9]+/g))

        if (alpha.length === 2) {
            console.log("IATA CODE", alpha)
            for (let airline of airlines) {
                // console.log(airline.iata);
                if (airline.iata === alpha.toUpperCase()){
                    console.log(alpha);
                    setAlpha(airline["icao"]);
                }
            }
    
        } else if (alpha.length > 3) {
            //
            // Response return invalid flight number
        }
    

    }, [flightNumber])    

    return (
        <>
        <p>{alpha}</p>
        <p>{numeric}</p>
        </>
    )
}

export default Flight;