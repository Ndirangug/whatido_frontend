import React from 'react';
import CaptionHeader from './CaptionHeader';

const ContentCaption = ({ userSlug, handleClose }) => {
  return (
    <div className="content-caption-container">
      <CaptionHeader userSlug={userSlug} handleClose={handleClose} />
    </div>
  );
};

export default ContentCaption;
