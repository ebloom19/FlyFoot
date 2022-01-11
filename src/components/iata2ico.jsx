import airlines from './src/airlines.json';

function GetIcaoFlightCode(props) {
    // load json file

    const flightCode = props.flightCode;

    for (let airline of airlines) {
        if (airline['iata'] == flightCode[0:2]){
            return airline["icao"];
        }
    }
}

export default GetIcaoFlightCode;



// # Converts an IATA airline code to ICAO
// def getIcaoFlightCode(flight_code):
// 	f = open('./static/airlines.json', "r")
// 	airlines = json.load(f)
// 	for airline in airlines:
// 		if airline["iata"] == flight_code[0:2]:
// 			return airline["icao"]