import { useDispatch, useSelector } from 'react-redux';
import { setEditableProfile } from '../../store/reducers/profile_reducer';
import { AdditionalLinkContainer } from '../../styles/profile.styles';
import AddLinkButton from '../utils/buttons/AddLinkButton';
import AddLinkInput from '../utils/inputs/AddLinkInput';
import { TextBase } from '../utils/typography/Typography';

function AdditionalLink() {
  const profile = useSelector((state) => state.profile.editableProfile);
  const dispatch = useDispatch();

  const addLink = () => {
    dispatch(
      setEditableProfile({
        additionalLinks: [
          ...profile.additionalLinks,
          { linkName: '', linkUrl: '' },
        ],
      })
    );
  };

  return (
    <AdditionalLinkContainer>
      <TextBase>additional links </TextBase>
      <div className="link-input-container">
        {profile.additionalLinks.map(({ linkName, linkUrl }, i) => (
          <AddLinkInput
            key={`additionalLink_${i}`}
            linkName={linkName}
            url={linkUrl}
            i={i}
          />
        ))}
        <AddLinkButton name={'add link'} evenHandler={addLink} />
      </div>
    </AdditionalLinkContainer>
  );
}

export default AdditionalLink;
