import React from "react";


function Products(props) {

    return (
        <div className="col-lg-4 col-md-6 col-sm-1">
            <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                    <p>{props.brand}</p>
                    <p>{props.variety}</p>
                    <p>{props.style}</p>
                    <p>{props.country}</p>
                    <p>{props.style}</p>
                    <p>{props.stars}</p>
                    <p>{props.top_ten}</p>
                </div>
            </div>
        </div>
    );

}

export default Products;