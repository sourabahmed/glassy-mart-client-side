import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const{name, description, rating} = review;
    return (
        <div className="review">
            <h5>{name}</h5>
            <p>{description}</p>
            <h6 className="text-danger">Rating: {rating} out of 5</h6>
        </div>
    );
};

export default Review;