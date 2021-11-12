import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://protected-plateau-17265.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h2>What client say <br /> about us</h2>
            <div className="reviews">
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;