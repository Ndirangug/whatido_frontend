import React from 'react';
import { ContentPageContainer } from '../../styles/home.styles';
import ReelsCard from '../utils/media/ReelsCard';

function Inspiring() {
  return (
    <ContentPageContainer>
      <ReelsCard />
      <ReelsCard />
      <ReelsCard />
    </ContentPageContainer>
  );
}

export default Inspiring;
