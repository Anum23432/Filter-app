import React from "react";
import data from "./Data";




function Details(props) {
    let getId = props.match.params.id;
    const getData = data[getId-1];
    console.log(getData);
    return (
        <>
            <h1>Blog Deatils</h1>
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                <div className="card p-0 overflow-hidden h-100 shadow" >
                    <img src={getData.image} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <p className="card-text">{getData.description}.</p>

                    </div>
                </div>
            </div>


        </>
    );
}

export default Details;