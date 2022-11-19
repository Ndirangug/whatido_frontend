import { AdditionalLinkContainer } from '../../styles/profile.styles';
import AddLinkButton from '../utils/buttons/AddLinkButton';
import AddLinkInput from '../utils/inputs/AddLinkInput';
import { TextBase } from '../utils/typography/Typography';

function AdditionalLink() {
  return (
    <AdditionalLinkContainer>
      <TextBase>additional links </TextBase>
      <div className="link-input-container">
        <AddLinkInput />
        <AddLinkInput />
        <AddLinkInput />
        <AddLinkButton name={'add link'} />
      </div>
    </AdditionalLinkContainer>
  );
}

export default AdditionalLink;
