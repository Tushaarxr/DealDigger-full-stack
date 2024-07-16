import React from 'react';

function ProductRecommendation() {
  // Generate a random percentage between 80% to 100%
  const randomPercentage = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

  return (
    <p className="text-sm text-black opacity-50">
      <span className="text-primary-green font-semibold">{randomPercentage}% </span> of
      buyers have recommended this.
    </p>
  );
}

export default ProductRecommendation;
