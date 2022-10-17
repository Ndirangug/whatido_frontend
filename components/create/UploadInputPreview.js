import { useDispatch, useSelector } from 'react-redux';
import { setCaption } from '../../store/reducers/media_reducer';
import {
  AbsoluteDiv,
  InputField,
  SelectField,
  UploadInputPreviewContainer,
} from '../../styles/create.styles';
import { LabelText, LearnMoreText } from '../utils/typography/Typography';

function UploadInputPreview() {
  const mediaFile = useSelector((state) => state.media.preUploadFile);
  const caption = useSelector((state) => state.media.caption);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCaption(e.target.value));
  };

  return (
    <UploadInputPreviewContainer>
      <div className="labelAndFieldContainer">
        <LabelText>Caption</LabelText>
        <div style={{ position: 'relative' }}>
          <InputField type="text" />
          <AbsoluteDiv>
            <span>@</span>
            <span>#</span>
          </AbsoluteDiv>
        </div>
      </div>
      <div className="labelAndFieldContainer">
        <LabelText>Cover</LabelText>
        <InputField className="extraHeight" />
      </div>
      <div className="labelAndFieldContainer">
        <LabelText>Who can view this video</LabelText>
        <SelectField>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="unlistd">Unlisted</option>
        </SelectField>
      </div>
      <div className="labelAndFieldContainer">
        <LabelText for="comment">Allow users to</LabelText>
        <div className="checkbox-wrapper">
          <div className="labelAndCheckboxContainer">
            <InputField type="checkbox" name="comment" />
            <LabelText for="comment">Comment</LabelText>
          </div>
          <div className="labelAndCheckboxContainer">
            <InputField type="checkbox" name="duet" checked />
            <LabelText for="duet">Duet</LabelText>
          </div>
          <div className="labelAndCheckboxContainer">
            <InputField type="checkbox" name="stitch" />
            <LabelText for="stitch">Stitch</LabelText>
          </div>
        </div>
      </div>
      <div className="labelAndFieldContainer">
        <LabelText>Run a copyright check</LabelText>
      </div>
      <div className="labelAndFieldContainer">
        <LearnMoreText>
          We will check your video for potential copyright infringements on used
          sounds. If infringements are found, you can edit the video before
          posting.
        </LearnMoreText>
      </div>
    </UploadInputPreviewContainer>
  );
}

export default UploadInputPreview;
