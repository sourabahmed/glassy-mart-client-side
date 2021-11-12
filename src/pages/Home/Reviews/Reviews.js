import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h2>This is Reviews</h2>
            <div>
                {
                    reviews.map(review => <h1>{review.name}</h1>)
                }
            </div>
        </div>
    );
};

export default Reviews;