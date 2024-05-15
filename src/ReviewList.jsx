
import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';
import reviewsData from './reviews_data.json';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    return (
        <div className="review-list-container">
            {reviews.map((review) => (
                <ReviewHighlighter key={review.review_id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
