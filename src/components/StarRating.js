import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
const [rating , setRating] = useState(null);
const [hover , setHover] = useState(null);
    return(
        <div>
            {[ ... Array(5)].map((star, i) =>{
              const ratingValue= i + 1;

                return <label>
                    <input type='radio' name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}/>
                    <FaStar className="starric" size={20} color={ratingValue <= (hover || rating) ? "#ffc107" : "rgb(175, 175, 175)" }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}/>
                    
                    </label>
            })}
            <h6> {rating} Ratings.</h6>
            </div>
    )
}

export  default StarRating;