import React, { useState } from 'react';

const Rating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'filled-star' : 'empty-star'}
          onClick={() => handleRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
