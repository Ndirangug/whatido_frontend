import { CloseRounded, Headphones, PlayCircle } from '@mui/icons-material';
import { Box, Button, IconButton, Skeleton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  setConnecting as setConnectingAction,
  setRecordingUrl as setRecordingUrlAction,
  showRecordingMiniplayer as showRecordingMiniplayerAction,
  updateRoomsList as updateRoomsListAction,
} from '../../actions/audio_chat_room';
import { joinRoom as _join, recreatePeer } from '../../webRTC/peerEvents';
import LazyImage from '../common/LazyImage';
import { TopicsList } from './addTopics';
//import LiveIcon from "../../webRTC/assets/audio_wave.gif";
import axios from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { toast } from 'react-toastify';
import { AUDIOROOM_API_URL } from '../../constants/api';
import { AUDIOROOM_CDN_URL } from '../../constants/audio-room';
import useQuery from '../../utils/useQuery';
import styles from './audioChat.module.css';

const default_url = '/img/profile.png';

const colorOptions = [
  { top: '#b61b78', bottom: '#871158' },
  { top: '#841bb6', bottom: '#621288' },
  { top: '#9eb515', bottom: '#637209' },
  { top: '#1bb6ac', bottom: '#11857e' },
];

const setCardColor = (index) => {
  if (index < 4) {
    return colorOptions[index];
  }
  return colorOptions[Math.ceil(index % 4)];
};

const ListenersList = ({ list }) => {
  let dList = [];

  if (list.length > 4) {
    dList = list.slice(1, 4);
  } else {
    dList = list.slice(1, list.length + 1);
  }

  return (
    <div className={styles['room-card-listeners']}>
      <div className={styles['listeners-images']}>
        {dList.map((_user) => (
          <LazyImage
            className={styles['room-listeners-image']}
            height="30"
            width="30"
            key={_user.peerId}
            placeholder={default_url}
            src={_user.profileImage ? _user.profileImage : default_url}
            alt="profile picture"
          />
        ))}
      </div>
      <div>
        <span>{list.length}</span>
        <span>Person(s) Listening</span>
      </div>
    </div>
  );
};

const RoomCard = ({ room, index }) => {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  const cardColor = setCardColor(index);
  // const cardColor = getRandomColor();
  // Math.floor(Math.random() * 16777215).toString(16);

  const onClickRoom = () => {
    if (room.isLive) {
      joinLive();
    } else {
      togglePlayRecording();
    }
  };

  const joinLive = () => {
    dispatch(setConnectingAction(true));
    console.log('join live room', room);
    recreatePeer(() => {
      _join(room);
    });
  };

  // useEffect(() => {
  //   const audioElement = document.getElementById(`audio-${room._id}`);
  //   if (isPlaying) {
  //     audioElement && audioElement.play();
  //   } else {
  //     audioElement && audioElement.pause();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isPlaying]);

  const togglePlayRecording = () => {
    console.log('listen to recorded room');

    if (room.recordingUrl === '') {
      toast.warn('Recording for this room not available');
    } else {
      console.log('access recorded room here: ', room.recordingUrl);
      console.log('before toggle', isPlaying);
      setIsPlaying(!isPlaying);
      dispatch(setRecordingUrlAction(room.recordingUrl));
      dispatch(showRecordingMiniplayerAction(true));

      console.log('after toggle', isPlaying);
    }
  };

  return (
    <div className={styles['audio-room-card']} onClick={onClickRoom}>
      <div
        className={styles['top-room-card']}
        // style={{ backgroundColor: "#" + cardColor + "d4" }}
        style={{ backgroundColor: cardColor.top }}
      >
        <p className={styles['room-status']}>
          {room.isLive ? (
            <>
              <img src="/audioroom-assets/audio_wave.gif" alt="." />
              <span>LIVE</span>
            </>
          ) : (
            <>
              <Headphones sx={{ mr: '0.5em' }} />
              <span>Recorded</span>
            </>
          )}
        </p>
        <p className={styles['room-title']}>{room.title}</p>
        <TopicsList
          list={room.topics.reduce(
            (_initial, _val) => [..._initial, { name: _val }],
            []
          )}
          noClick={true}
        />
        <ListenersList
          list={room.hosts.concat(room.speakers).concat(room.otherUsers)}
        />

        <div className={styles['room-card-action']}>
          {room.isLive ? (
            <Button onClick={joinLive}>JOIN LIVE</Button>
          ) : (
            <div>
              <Button sx={{ color: '#fff' }} onClick={togglePlayRecording}>
                {/* {isPlaying ? (
                  <PauseCircle width="2em" />
                ) : (
                  <PlayCircle width="2em" />
                )} */}
                <PlayCircle width="2em" />
                <Box>Play Recording</Box>
              </Button>
              {/* <audio
                style={{ display: "none" }}
                src={room.recordingUrl}
                id={`audio-${room._id}`}
                controls="false"
              ></audio> */}
            </div>
          )}
        </div>
      </div>
      <div
        className={styles['bottom-room-card']}
        // style={{ backgroundColor: "#" + cardColor }}
        style={{ backgroundColor: cardColor.bottom }}
      >
        {room.hosts[0] ? (
          <div className={styles['host-details']}>
            <LazyImage
              className=""
              height="30"
              width="30"
              placeholder={default_url}
              src={room.hosts[0].profileImage ?? default_url}
              alt="profile picture"
            />
            <span>
              {room.hosts[0].firstName} {room.hosts[0].lastName}
            </span>
            <span
              className={styles['host-banner']}
              // style={{ backgroundColor: "#" + cardColor + "d4" }}
              style={{ backgroundColor: cardColor.top }}
            >
              Host
            </span>
          </div>
        ) : (
          '' //TODO INVESTIGATE HOW HOST INFO MISSING
        )}
        <p className={styles['host-bio']}>{}</p>
      </div>
    </div>
  );
};

const RoomsPage = () => {
  const dispatch = useDispatch();
  const roomsList = useSelector((state) => state.audioRoom.roomsList);
  const showRecordingMiniplayer = useSelector(
    (state) => state.audioRoom.showRecordingMiniplayer
  );
  const recordingUrl = useSelector((state) => state.audioRoom.recordingUrl);
  const query = useQuery();
  const [room, setRoom] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(false);
  const hasNext = useRef(false);
  const cursor = useRef(null);
  const pageBottomRef = useRef();
  const audioElementRef = useRef();
  let roomId;

  const closeMiniplayer = () => {
    dispatch(showRecordingMiniplayerAction(false));
    audioElementRef.current.audio.current.pause();
  };


  useEffect(() => {
    console.log('fetching room');
    axios
      .get(`${AUDIOROOM_API_URL}/rooms/${roomId}`)
      .then((response) => {
        console.log('successfully fetched room', response.data);
        const room = response.data;

        if (room.isLive) {
          dispatch(setConnectingAction(true));
          recreatePeer(() => {
            _join(response.data);
          });
        } else {
          console.log('access recorded room');
          toast.warn('Recording for this room not available');
          console.log(
            'access recorded room here: ',
            AUDIOROOM_CDN_URL + roomId
          );
        }
      })
      .catch((err) => {
        console.error('errror fetching room', err);
      });
  }, [roomId]);

  roomId = query.get('id');

  useEffect(() => {
    //TODO FETCH ROOMS
    setLoading(true);
    console.log('fetch new page ' + page);
    axios
      .get(
        `${AUDIOROOM_API_URL}/rooms?isrivate=false&limit=${limit}&cursor=${
          cursor.current ?? ''
        }`
      )
      .then((_results) => {
        console.log(`rooms on page ${page}`, _results);
        dispatch(updateRoomsListAction(_results.data.data));
        hasNext.current = _results.data.cursor !== null;
        cursor.current = _results.data.cursor;
      })
      .catch((err) => {
        console.error('error fetching rooms', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    console.log('initialize observer');
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('entry o is intersection', entries[0]);
        if (hasNext.current || page === 1) {
          console.log('setting new page from ' + page);
          setPage(page + 1);
        } else {
          console.log('next page not available');
        }
      } else {
        console.log('entry o is  not intersection', entries[0]);
      }
    });

    observer.observe(document.querySelector('#load-more-target'));
  }, []);

  console.log(
    `${window.innerHeight}px - ${pageBottomRef.current?.offsetTop}px = ${
      window.innerHeight - pageBottomRef.current?.offsetTop
    }px`
  );

  return (
    <>
      <Box className={styles['container']} sx={{ position: 'relative' }}>
        <ol className={styles['breadcrumb']}>
          <li className={styles['breadcrumb-item']}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={`${styles['breadcrumb-item']} ${styles['active']}`}>Rooms</li>
        </ol>
        <div id="pageTitle">
          <div className={styles['title']}>Rooms</div>
          <div className={styles['small']}>Join an ongoing conversation!</div>
        </div>
        <br></br>

        <div id="rooms-list" className={styles['rooms-list']}>
          {roomsList.length > 0 ? (
            roomsList.map((_room, _index) => (
              <RoomCard key={_room._id} room={_room} index={_index} />
            ))
          ) : loading ? (
            /* if loading dont show the  no rooms message. Just blank */
            <div></div>
          ) : (
            <div className="no-rooms alert-warning alert">
              <p>No public live or recorded rooms available at the moment!</p>
            </div>
          )}

          {loading ? (
            <Skeleton variant="rectangular" width={'100%'} height={118} />
          ) : (
            <></>
          )}

          <Box
            ref={pageBottomRef}
            id="load-more-target"
            sx={{
              height: '20px',
              // background: "blue",
              position: 'relative',
              bottom: `-${
                window.innerHeight - pageBottomRef.current?.offsetTop
              }px`,
            }}
          ></Box>
        </div>

        {/* <Box
          className={styles['pagination-action']}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            disabled={roomsList.length < 1}
            onClick={() => setPage(page + 1)}
          >
            More
          </Button>
        </Box> */}
      </Box>

      <Box
        id="recording-miniplayer"
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          display: showRecordingMiniplayer ? 'flex' : 'none',
          justifyContent: 'center',
          paddingLeft: { xs: '2em', md: '8em' },
          paddingRight: { xs: '2em', md: '8em' },
        }}
      >
        <Box sx={{ width: '100%', position: 'relative' }}>
          <IconButton
            id="btnCloseMiniplayer"
            color="warning"
            size="small"
            sx={{
              position: 'absolute',
              top: '-1em',
              right: '-1em',
              background: 'black',
              color: 'white',
            }}
            onClick={closeMiniplayer}
          >
            <CloseRounded />
          </IconButton>

          <AudioPlayer
            ref={audioElementRef}
            autoPlay
            src={recordingUrl}
            onPlay={() => console.log('onPlay')}
            customAdditionalControls={[]}
            // other props here
          />
        </Box>
      </Box>
    </>
  );
};

export default RoomsPage;
