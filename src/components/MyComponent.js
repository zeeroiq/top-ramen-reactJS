import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Products from "./Products"

let countriesList = [];
let set = new Set();

function populateRespons(item) {

    countriesList.push(item.Country);
    set.add(item.country);

    return (
        <Products
            key={shortid.generate()}
            brand={item.Brand}
            variety={item.Variety}
            style={item.Style}
            country={item.Country}
            stars={item.Stars}
            top_ten={item.top_ten}
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

                {items.map(item => populateRespons(item))}
                {console.log("Set items are : ")}
                {set.forEach(v => console.log(v))}
            </div>
        )
    }

}
export default MyComponent;
export { countriesList };
