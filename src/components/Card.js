import React from "react";
import {

    Route,
    Link
} from "react-router-dom";



function Card(props) {
    return (
        <>
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                <div class="card p-0 overflow-hidden h-100 shadow" >
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 class="card-title">{props.category}</h5>
                        {/* <p className="card-text">{props.description}.</p> */}
                        <Route>

                            <Link to={props.link} class="btn btn-primary">Go somewhere</Link>
                        </Route>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Card;