import React from "react"
import {countriesList} from "./MyComponent"

function renderCountry(country, index) {
    return <div className="col-lg-4 col-md-6 col-sm-1" key={index}>
            <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                    <p>{country}</p>
                </div>
            </div>
        </div>;
}
function ListCountries() {
    console.log("List countries is called.");
    console.log("data is : " + countriesList);

    return (
    <div className="row">
        {countriesList.map((country, index) => renderCountry(country, index))}
    </div>
    );
}

export default ListCountries;