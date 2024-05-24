import { Link } from 'react-router-dom';
import './Country.css'


const Country = ({ country }) => {
    const { name, flags, area, capital, cca3 } = country;
    // console.log(country);
    return (
        <div className='country visited'>
            <p>Name: {name.common}</p>
            <img className='img' src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Code: {cca3}</p>
            <Link to={`/country/${cca3}`}><button className='mb'>Show Details</button></Link>
        </div>
    );
};

export default Country;