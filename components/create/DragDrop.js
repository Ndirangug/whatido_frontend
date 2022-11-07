import axios from 'axios';
import { useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  setIsFetchingMediaInfo,
  setMediaError,
} from '../../store/reducers/media_reducer';
import { DragDropContainer } from '../../styles/create.styles';
import { SelectButtonContainer } from '../../styles/utils.styles';
import UploadIcon from '../utils/icons/UploadIcon';
import {
  ShareHeadingText,
  ShareParaText,
} from '../utils/typography/Typography';

function DragDrop({ setScreenShots, setSelectedSS }) {
  const [uploadPercent, setUploadPercent] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('initial');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [tokenSrc, setToken] = useState(null);
  const tokenSrc = useRef(null);
  const dispatch = useDispatch();

  const onFileChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (file.size > 2500000000) {
      dispatch(setMediaError('upload maximum file size 250mb'));
      return;
    } else {
      dispatch(setIsFetchingMediaInfo(true));
      console.log(file, 'video file');
      const videoFormData = new FormData();
      videoFormData.append('video', file);
      videoFormData.append('start_offset', 1);
      // const tok = axios.CancelToken.source();
      // setToken(tok);
      axios
        .post('http://localhost:4000/upload', videoFormData, {
          'Content-Type': 'multipart/form-data',
        })
        .then((response) => {
          setLoading(false);
          console.log(response);

          // console.log(response?.data?.data?.imageUrls, 'upload reponse');
          // setVideoData(response?.data?.data);
          // setScreenShots(response?.data?.data?.imageUrls);
          // setSelectedSS(response?.data?.data?.imageUrls[0]);
          // setUploadStatus('videoUploaded');
          // setLoading(false);
          // setUploadPercent(null);
          // console.log('video uploaded successfully');
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            alert(err.message);
          }
          setLoading(false);
          setUploadPercent(null);
          console.log(err);
        });

      // console.log(videoData, 'video data');

      // const res = await getMediaProcessed(videoData, 'thumbnail');
      // if (!res.ok) {
      //   dispatch(setIsFetchingMediaInfo(false));
      //   dispatch(setMediaError('failed to get media metadata'));
      //   return;
      // }

      // const thumbnailBlob = await res.blob();
      // let thumbnailFile = new File([thumbnailBlob], 'video_thumbnail', {
      //   type: 'image/png',
      // });
      // dispatch(setIsFetchingMediaInfo(false));
      // dispatch(setPreUploadFile({ file: file, thumbnail: thumbnailFile }));
      // dispatch(setMediaError(null));
      // dispatch(setMediaPreview('PREVIEW'));
    }
  };

  return (
    <DragDropContainer isBorder={videoData == null || loading}>
      {uploadPercent && uploadPercent !== 100 ? (
        <div className="loadingContainer">
          <div style={{ width: '50px', height: '50px' }}>
            <CircularProgressbar
              value={uploadPercent}
              text={`${uploadPercent}%`}
            />
          </div>
          <h3>uploading</h3>
          <h3
            onClick={() => {
              console.log(tokenSrc.current);
              console.log('hahah');
              if (tokenSrc.current) {
                tokenSrc.current('Oborted by user');
              }
            }}
            className="cancel button"
          >
            Cancel
          </h3>
        </div>
      ) : uploadPercent === 100 && loading ? (
        <ClipLoader
          color="black"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : videoData && !loading ? (
        <div
          style={{
            maxWidth: '100%',
            maxHeight: '600px',
            position: 'relative',
            zIndex: '10',
            borderRadius: '40px',
            // overflow: 'hidden',
          }}
        >
          <img
            src="/mobile-frame.png"
            alt="frame"
            width={'100%'}
            style={{
              zIndex: '12',
              position: 'relative',
              maxHeight: '600px',
              pointerEvents: 'none',
            }}
          />
          <video
            className="video"
            controls
            style={{
              borderRadius: '40px',
              padding: '10px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,  -50%)',
            }}
            src={`${videoData?.videoUrl}`}
          ></video>
        </div>
      ) : (
        <>
          <UploadIcon />
          <div className="margin-bottom">
            {/* <h2>{uploadPercent}</h2> */}
            <ShareHeadingText>select video to upload</ShareHeadingText>
            <ShareParaText>or drag and drop a file</ShareParaText>
          </div>
          <ShareParaText>MP4 or WebM</ShareParaText>
          <ShareParaText>720x1280 resolution or higher</ShareParaText>
          <ShareParaText>up to 5 minutes</ShareParaText>
          <ShareParaText> less than 2 GB</ShareParaText>
          <SelectButtonContainer>select file</SelectButtonContainer>
          <input
            type="file"
            className="drop-input"
            accept="video/*"
            onChange={(e) => onFileChange(e)}
          />
        </>
      )}
    </DragDropContainer>
  );
}

export default DragDrop;
