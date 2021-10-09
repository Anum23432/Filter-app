import React from "react";
import {

    Route,
    Link
} from "react-router-dom";
import StarRating from "./StarRating";



function Card(props) {
    return (
        <>
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                <div class="card p-0 overflow-hidden h-100 " >
                    <img src={props.picture} className="card-img-top" alt="mobile" /><hr/>
                    <div className="card-body">
                        <div className="abc"><StarRating/></div> <hr/>                      
                         <h5 class="card-title">{props.category}</h5><hr/>
                        <h5 class="card-title">{props.model}</h5>
                        <Route>

                            <Link to={props.link} class="btn btn-primary">Show More!</Link>
                        </Route>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Card;
