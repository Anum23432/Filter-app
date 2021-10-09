import React from "react";
import data from "./Data";
import Comments from './Comments';



function Details(props) {
    let getId = props.match.params.id;
    const getData = data[getId-1];
    console.log(getData);
    return (
        <>
        <br/><br/><br/>
            <h1>REVIEWS</h1>
            
            <div className='box1'>
                <div className="box2" >
                <img src={getData.picture} className="card-img-top" alt="mobile"/><hr/>
                    <div className="card-body">

                        <h6 className="card-text">Memory: </h6> <p>{getData.memory}</p>
                        <h6 className="card-text">Body Built: </h6> <p>{getData.body}</p>
                        <h6 className="card-text">Display: </h6><p>{getData.display}</p>
                        <h6 className="card-text">Battery: </h6><p>{getData.battery}</p>
                        <h6 className="card-text">Price: </h6><p>{getData.price}</p>

                    </div>
                </div><br/>
 
  </div>
  <div className="feedback">
      
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
            <br/>
  


        </>
    );
}

export default Details;
