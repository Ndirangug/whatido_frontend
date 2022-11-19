import React from 'react';
import { AddLinkInputContainer } from '../../../styles/utils.styles';
import { TextSm } from '../typography/Typography';

function AddLinkInput() {
  return (
    <AddLinkInputContainer>
      <div className="link-name-container">
        <TextSm>link name</TextSm>
        <input type="text" className="input" />
      </div>
      <div className="link-url-container">
        <TextSm>url</TextSm>
        <input type="text" className="input" />
      </div>
    </AddLinkInputContainer>
  );
}

export default AddLinkInput;
