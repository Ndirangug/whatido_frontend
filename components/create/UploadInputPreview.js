import { useDispatch, useSelector } from 'react-redux';
import { setCaption } from '../../store/reducers/media_reducer';
import {
  AbsoluteDiv,
  InputField,
  UploadInputPreviewContainer,
} from '../../styles/create.styles';
import { LabelText, LearnMoreText } from '../utils/typography/Typography';
function UploadInputPreview({ screenShots, imgClicked, setimgClicked }) {
  const mediaFile = useSelector((state) => state.media.preUploadFile);
  const caption = useSelector((state) => state.media.caption);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCaption(e.target.value));
  };

  return (
    <UploadInputPreviewContainer>
      <div className="labelAndFieldContainer">
        <LabelText>caption</LabelText>
        <div style={{ position: 'relative' }}>
          <InputField type="text" />
          <AbsoluteDiv>
            <span>@</span>
            <span>#</span>
          </AbsoluteDiv>
        </div>
      </div>
      <div className="labelAndFieldContainer">
        <LabelText>cover</LabelText>
        <div className="previewComp">
          {screenShots?.length !== 0
            ? screenShots?.map((e, i) => (
                <div className="previewCompChild" key={i}>
                  <img
                    src={`http://localhost:4000${e}`}
                    style={{
                      position: 'relative',
                      zIndex: imgClicked === e ? '10' : '0',
                      border: imgClicked === e ? '7px solid white' : 'none',
                      borderRadius: imgClicked === e ? '10px' : '0px',
                      boxShadow:
                        imgClicked === e ? '0px 10px 50px 0px #e3e2e1' : 'none',
                      opacity: imgClicked === e ? '100%' : '50%',
                      scale: imgClicked === e ? '1.1' : '1',
                      transition: 'scale ease 0.3s',
                    }}
                    onClick={() => {
                      setimgClicked(e);
                    }}
                  ></img>
                </div>
              ))
            : null}
        </div>
      </div>
      {/* <div className="labelAndFieldContainer">
        <LabelText>Who can view this video</LabelText>
        <SelectField>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="unlistd">Unlisted</option>
        </SelectField>
      </div> */}
      {/* <div className="labelAndFieldContainer">
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
      </div> */}
      <div className="labelAndFieldContainer">
        <LabelText>run a copyright check</LabelText>
        <LearnMoreText>
          we will check your video for potential copyright infringements on used
          sounds. If infringements are found, you can edit the video before
          posting.
        </LearnMoreText>
      </div>
    </UploadInputPreviewContainer>
  );
}

export default UploadInputPreview;
