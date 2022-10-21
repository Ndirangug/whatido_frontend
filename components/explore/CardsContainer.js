import React from 'react';
import ExploreCards from './ExploreCards';
import ExploreExpertsCards from './ExploreExpertsCards';

const CardsContainer = ({ page }) => {
  return (
    <div>{page === 'expert' ? <ExploreExpertsCards /> : <ExploreCards />}</div>
  );
};

export default CardsContainer;
