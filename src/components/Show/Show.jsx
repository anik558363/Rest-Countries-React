import { useLoaderData, useNavigate } from "react-router-dom";


const Show = () => {
    const country = useLoaderData();
    const navigate = useNavigate();
    console.log(country);
    const handleGoBack = () =>{
        navigate(-1)
    }
    
    return (
        <div>
            <h2>name: {country[0].name['common']}</h2>
            <p>Code: {country[0].cca3}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Show;