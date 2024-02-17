import React from 'react';

function StarRating({ rating, onRatingChange }) {
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    const className =
      i <= rating ? 'star-icon fas fa-star' : 'star-icon far fa-star';

    starIcons.push(
      <i
        key={i}
        className={className}
        onClick={() => onRatingChange(i)}
        aria-hidden="true"
      />
    );
  }

  return <div className="star-rating">{starIcons}</div>;
}

export default StarRating;
