import React from 'react';

const Review = ({review}) => {
    const{name, description, rating} = review;
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Rating: {rating} out of 5</h4>
        </div>
    );
};

export default Review;