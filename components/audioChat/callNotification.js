import * as React from 'react';

import { Box, Button, Typography } from '@mui/material';

//import incomingCall from "../../webRTC/assets/incoming_call.mp3";

export function AudioCallNotification({
  message,
  accept,
  reject,
  acceptText,
  rejectText,
}) {
  const audioRef = React.useRef();
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <audio
        crossOrigin="anonymous"
        src="/audioroom-assets/incoming_call.mp3"
        autoPlay
        ref={audioRef}
      />
      <h6>{message}</h6>
      <Box
        display={'flex'}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="text"
          color="inherit"
          onClick={() => {
            audioRef.current.pause();
            accept();
          }}
        >
          {acceptText}
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={() => {
            audioRef.current.pause();
            reject();
          }}
        >
          {rejectText}
        </Button>
      </Box>
    </Box>
  );
}

export function RetryNotification({ message, retry }) {
  return (
    <Box
      width="100%"
      display={'flex'}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Typography>{message}</Typography>
      <Button onClick={retry}>RETRY</Button>
    </Box>
  );
}
