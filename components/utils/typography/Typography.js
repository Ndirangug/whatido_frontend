import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const TextXS = styled(Typography)`
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
  font-weight: 300;
  color: white;
`;

export const TextSM = styled(Typography)`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  font-weight: 400;
  color: white;
`;

export const CreateText = styled(Typography)`
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  font-weight: 500;
  width: 100%;
  text-align: center;
  color: var(--main-indigo);
`;

export const CreateCaptionText = styled(Typography)`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  font-weight: 400;
  white-space: nowrap;
  margin-right: 0.5rem;
`;

export const ShareText = styled(Typography)`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: var(--main-gray);
`;
export const ExploreText = styled(Typography)`
  font-size: 1.5rem;
  line-height: 1rem;
  letter-spacing: 0.025rem;
  color: #001433;
`;
