import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h3>All Countries: {countries.length}</h3>
            <div className="country_container">
                {
                    countries.map((country, index) => <Country key={index} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;