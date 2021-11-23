import React from 'react';
import Rating from 'react-rating';
import './Review.css'

const Review = ({review}) => {
    const{name, description, rating} = review;
    return (
        <div className="review">
            <h5>{name}</h5>
            <p>{description.slice(0, 50)}</p>
            <Rating
                readonly
                initialRating={rating}
                emptySymbol="far fa-star text-warning"
                fullSymbol="fas fa-star text-warning"               
            />
        </div>
    );
};

export default Review;