import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="star filled-star">
        &#9733; {/* Filled star character */}
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="star half-star">
        &#9733;&#189; {/* Half star character */}
      </span>
    );
  }

  while (stars.length < 5) {
    stars.push(
      <span key={stars.length} className="star unfilled-star">
        &#9734; {/* Unfilled star character */}
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};