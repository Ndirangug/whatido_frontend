import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';

const StyledIconBtn = styled(IconButton)`
  border-radius: 6px;
  padding: 0;
`;

function CreateIcon() {
  const router = useRouter();

  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!authenticated) {
      dispatch(setAuthComonent('LOGIN'));
    } else {
      router.push('/create');
    }
  };
  return (
    <StyledIconBtn onClick={handleCreate}>
      <svg
        width="142"
        height="44"
        viewBox="0 0 142 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="141" height="43" rx="2.5" fill="white" />
        <path
          d="M21.2969 13.5625H22.7031C22.8281 13.5625 22.8906 13.625 22.8906 13.75V30.25C22.8906 30.375 22.8281 30.4375 22.7031 30.4375H21.2969C21.1719 30.4375 21.1094 30.375 21.1094 30.25V13.75C21.1094 13.625 21.1719 13.5625 21.2969 13.5625Z"
          fill="black"
        />
        <path
          d="M14.125 21.1094H29.875C30 21.1094 30.0625 21.1719 30.0625 21.2969V22.7031C30.0625 22.8281 30 22.8906 29.875 22.8906H14.125C14 22.8906 13.9375 22.8281 13.9375 22.7031V21.2969C13.9375 21.1719 14 21.1094 14.125 21.1094Z"
          fill="black"
        />
        <path
          d="M64.94 27.28C62.8333 27.28 61.0933 26.58 59.72 25.18C58.3467 23.78 57.66 22.0533 57.66 20C57.66 17.9333 58.3467 16.2067 59.72 14.82C61.0933 13.42 62.8333 12.72 64.94 12.72C66.2067 12.72 67.3733 13.02 68.44 13.62C69.52 14.2067 70.36 15.0067 70.96 16.02L68.58 17.4C68.2333 16.7733 67.74 16.2867 67.1 15.94C66.46 15.58 65.74 15.4 64.94 15.4C63.58 15.4 62.48 15.8267 61.64 16.68C60.8133 17.5333 60.4 18.64 60.4 20C60.4 21.3467 60.8133 22.4467 61.64 23.3C62.48 24.1533 63.58 24.58 64.94 24.58C65.74 24.58 66.46 24.4067 67.1 24.06C67.7533 23.7 68.2467 23.2133 68.58 22.6L70.96 23.98C70.36 24.9933 69.5267 25.8 68.46 26.4C67.3933 26.9867 66.22 27.28 64.94 27.28ZM74.8637 18.72C75.1037 18.08 75.4971 17.6 76.0437 17.28C76.6037 16.96 77.2237 16.8 77.9037 16.8V19.68C77.1171 19.5867 76.4104 19.7467 75.7837 20.16C75.1704 20.5733 74.8637 21.26 74.8637 22.22V27H72.2837V17H74.8637V18.72ZM80.8135 23.06C81.1602 24.3133 82.1002 24.94 83.6335 24.94C84.6202 24.94 85.3669 24.6067 85.8735 23.94L87.9535 25.14C86.9669 26.5667 85.5135 27.28 83.5935 27.28C81.9402 27.28 80.6135 26.78 79.6135 25.78C78.6135 24.78 78.1135 23.52 78.1135 22C78.1135 20.4933 78.6069 19.24 79.5935 18.24C80.5802 17.2267 81.8469 16.72 83.3935 16.72C84.8602 16.72 86.0669 17.2267 87.0135 18.24C87.9735 19.2533 88.4535 20.5067 88.4535 22C88.4535 22.3333 88.4202 22.6867 88.3535 23.06H80.8135ZM80.7735 21.06H85.8735C85.7269 20.38 85.4202 19.8733 84.9535 19.54C84.5002 19.2067 83.9802 19.04 83.3935 19.04C82.7002 19.04 82.1269 19.22 81.6735 19.58C81.2202 19.9267 80.9202 20.42 80.7735 21.06ZM97.3685 17H99.9485V27H97.3685V25.82C96.5952 26.7933 95.5085 27.28 94.1085 27.28C92.7752 27.28 91.6285 26.7733 90.6685 25.76C89.7218 24.7333 89.2485 23.48 89.2485 22C89.2485 20.52 89.7218 19.2733 90.6685 18.26C91.6285 17.2333 92.7752 16.72 94.1085 16.72C95.5085 16.72 96.5952 17.2067 97.3685 18.18V17ZM92.6085 24.04C93.1285 24.56 93.7885 24.82 94.5885 24.82C95.3885 24.82 96.0485 24.56 96.5685 24.04C97.1018 23.5067 97.3685 22.8267 97.3685 22C97.3685 21.1733 97.1018 20.5 96.5685 19.98C96.0485 19.4467 95.3885 19.18 94.5885 19.18C93.7885 19.18 93.1285 19.4467 92.6085 19.98C92.0885 20.5 91.8285 21.1733 91.8285 22C91.8285 22.8267 92.0885 23.5067 92.6085 24.04ZM107.6 19.48H105.34V23.64C105.34 23.9867 105.427 24.24 105.6 24.4C105.773 24.56 106.027 24.6533 106.36 24.68C106.693 24.6933 107.107 24.6867 107.6 24.66V27C105.827 27.2 104.573 27.0333 103.84 26.5C103.12 25.9667 102.76 25.0133 102.76 23.64V19.48H101.02V17H102.76V14.98L105.34 14.2V17H107.6V19.48ZM110.879 23.06C111.225 24.3133 112.165 24.94 113.699 24.94C114.685 24.94 115.432 24.6067 115.939 23.94L118.019 25.14C117.032 26.5667 115.579 27.28 113.659 27.28C112.005 27.28 110.679 26.78 109.679 25.78C108.679 24.78 108.179 23.52 108.179 22C108.179 20.4933 108.672 19.24 109.659 18.24C110.645 17.2267 111.912 16.72 113.459 16.72C114.925 16.72 116.132 17.2267 117.079 18.24C118.039 19.2533 118.519 20.5067 118.519 22C118.519 22.3333 118.485 22.6867 118.419 23.06H110.879ZM110.839 21.06H115.939C115.792 20.38 115.485 19.8733 115.019 19.54C114.565 19.2067 114.045 19.04 113.459 19.04C112.765 19.04 112.192 19.22 111.739 19.58C111.285 19.9267 110.985 20.42 110.839 21.06Z"
          fill="black"
        />
        <rect
          x="0.5"
          y="0.5"
          width="141"
          height="43"
          rx="2.5"
          stroke="#DDDDDD"
        />
      </svg>
    </StyledIconBtn>
  );
}

export default CreateIcon;
