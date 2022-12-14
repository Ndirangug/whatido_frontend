import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';
import AddTopics from './addTopics';
import CreateRoom from './createRoom';
import InvitePeople from './invitePeople';
import LiveRoom from './liveRoom';
//import "./audioChat.css";
import { Provider } from 'react-redux';
import { startPingRoom } from '../../audiorooms-client';
import store from '../../store';
import {
  createRoom,
  updateHostControls,
} from '../../store/actions/audio_chat_room';
import { AudioChatContainer } from '../../styles/audioChat.styles';
import styles from './audioChat.module.css';

const AudioChat = ({ expert, user }) => {
  const [state, setState] = useState({
    opacity: 0.5,
    translate: 0,
    display: 'visible',
  });
  const [temporaryRoom, setTemporaryRoom] = useState({
    title: '',
    topics: [],
    hosts: [],
    private: false,
    speakers: [],
    otherUsers: [],
  });

  console.log('after create room user', user);
  console.log('after create room expert', expert);

  const [segment, setSegment] = useState('');

  const animate = () => {
    setState(
      {
        opacity: state.opacity === 0.5 ? 0 : 0.5,
        translate: state.opacity === 0 ? 0 : 100,
      },
      () => {
        if (state.opacity === 0) {
          setTimeout(() => {
            setState({
              display: 'hidden',
            });
          }, 200);
        } else {
          setState({
            display: 'visible',
          });
        }
      }
    );
  };

  const setChatSegment = () => {
    switch (segment) {
      case 'live':
        return (
          <LiveRoom
            animate={animate}
            user={{
              ...user,
              ...(user.profile && { firstName: user.profile.firstName }),
              ...(user.profile && { lastName: user.profile.lastName }),
            }}
            setSegment={setSegment}
          />
        );
      case 'topics':
        return (
          <AddTopics
            animate={animate}
            setRoom={setTemporaryRoom}
            room={temporaryRoom}
            setSegment={setSegment}
          />
        );
      case 'invite':
        return <InvitePeople setSegment={setSegment} animate={animate} />;
      default:
        return (
          <CreateRoom
            animate={animate}
            setRoom={setTemporaryRoom}
            room={temporaryRoom}
            setSegment={setSegment}
          />
        );
    }
  };

  const setInitialRoomMembers = () => {
    setTemporaryRoom({
      ...temporaryRoom,
      hosts: [
        {
          ...user,
          audioRoomRole: 'Host',
          firstName: user.firstName || '',
          lastName: user.lastName || '',
        },
        {
          ...expert,
          audioRoomRole: 'Co-host',
          profileImage: expert.profileImage || expert.photo,
        },
      ],
    });
  };

  useEffect(() => {
    // receiving call, go to liveroom
    if (!expert) {
      setSegment('live');
    } else {
      // creating new room before call
      setInitialRoomMembers();
    }
  }, []);

  return (
    <div>
      <Motion
        style={{
          opacity: spring(state.opacity),
          translate: spring(state.translate),
        }}
      >
        {({ translate }) => (
          <AudioChatContainer
            id="audio-chat-container"
            visibility={state.display}
          >
            <div
              id="audio-chat-content"
              className={styles['audio-chat-content']}
              style={{
                transform: `translateY(${translate}%)`,
              }}
            >
              {setChatSegment()}
            </div>
          </AudioChatContainer>
        )}
      </Motion>
    </div>
  );
};

export const showChatRoom = async (expert) => {
  const container = document.getElementById('audio-chatroom-container');
  console.log('place call to', expert);
  // fetch authenticated user
  const currentUser = await store.getState().auth.currentUser;
  console.log('place call from', currentUser);


  if (currentUser && Object.keys(currentUser).length) {
    ReactDOM.render(
      <div>
        <Provider store={store}>
          <AudioChat
            key={new Date().getTime()}
            expert={expert}
            user={currentUser}
          />
        </Provider>
      </div>,
      container
    );
  } else {
    alert('Sorry! You have to be logged in to perform this action.');
  }
};

export const renderRoomOnCall = (_room, role) => {
  const hostControls = role === 'Host' || role === 'Co-host';
  store.dispatch(createRoom(_room));
  store.dispatch(updateHostControls(hostControls));
  showChatRoom(null);
  startPingRoom(_room._id);
};

export default AudioChat;
