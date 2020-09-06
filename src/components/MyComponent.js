import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Products from "./Products"

const countriesList = []

let responseData = {
    brand: "",
    variety: "",
    style: "",
    country: "",
    stars: "",
    top_ten: ""
}

function populateCountry(item) {
    responseData = item;
    countriesList.push(responseData.Country);

    return (
        <Products key={shortid.generate()}
            brand={responseData.Brand}
            variety={responseData.Variety}
            style={responseData.Style}
            country={responseData.Country}
            stars={responseData.Stars}
            top_ten={responseData["Top Ten"]}
        />);
}
function MyComponent() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {

        fetch("http://starlord.hackerearth.com/TopRamen")
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true);
                    setItems(result);
                },

                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []) // marks this effect will run only once.

    if (error) {
        return <div>
            Error: {error.message}
        </div>
    }
    else if (!isLoaded) {
        return <div>
            Loading...
        </div>
    }
    else {
        console.log("Items: ", items);
        // return <p>Check </p>;
        return (
            <div className="row">

                {items.map(item => populateCountry(item))}

            </div>
        )
    }

}
export default MyComponent;
export { countriesList };
