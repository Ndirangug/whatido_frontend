import { Add, Close } from '@mui/icons-material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  createRoom,
  inviteParticipant,
  startPingRoom,
} from '../../audiorooms-client';
import { socket } from '../../audiorooms-client/socketEvents';
import store from '../../store';
import {
  createRoom as createRoomAction,
  setRoomCreated,
  updateHostControls,
} from '../../store/actions/audio_chat_room';
import { TopicsList } from './addTopics';
import { RoomMember } from './liveRoom';
//import { useDispatch } from "react-redux";
import { ButtonContainer } from '../../styles/utils.styles';
import StyledButton from '../utils/buttons/Button';
import styles from './audioChat.module.css';

const CreateRoom = ({ animate, room, setRoom, setSegment }) => {
  const [creatingRoom, setCreatingRoom] = useState(false);
  //const dispatch = useDispatch();

  const handleTitleInputChange = (event) => {
    setRoom({ ...room, title: event.target.value });
  };

  const handlePrivateChange = (event) => {
    console.log(`private`, event.target.checked);
    setRoom({ ...room, private: event.target.checked });
  };

  const verifyRoomValidity = () => {
    console.log(room);
    return room.title && room.topics.length > 0 && room.hosts.length > 1
      ? true
      : false;
  };

  const _createRoom = () => {
    if (verifyRoomValidity()) {
      setCreatingRoom(true);
      document.getElementById('create-room-btn').setAttribute('disabled', true);

      createRoom(room)
        .then(async (createdRoom) => {
          if (!(createdRoom instanceof Error)) {
            store.subscribe(() => {
              if (store.getState().audioRoom.roomCreated) {
                console.log('room truly created:');

                setSegment('live');
                setCreatingRoom(false);
              }
            });

            socket.emit('host-created-audio-room', createdRoom);

            console.log('created room in db');
            console.log(createdRoom);

            store.dispatch(createRoomAction(createdRoom));
            store.dispatch(updateHostControls(true));
            store.dispatch(setRoomCreated(true));
            startPingRoom(createdRoom._id);
            await inviteParticipant(createdRoom, room.hosts[1], 'Co-host');
          } else {
            //TODO CLEAN UP THIS ERROR HANDLING MAKE IT A LIL USERFRIENDLY
            if (
              createdRoom.message
                .toLowerCase()
                .includes('user with the following peerid not found')
            ) {
              toast.error(
                "Oops! We couldn't create your room due to an outdated peerId.Just refresh your tab.",
                { delay: 10000 }
              );
            } else {
              toast.error(createdRoom.message, { delay: 10000 });
            }
            console.warn('Error creating room,', createdRoom);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message, { delay: 10000 });
        });
      // setTimeout(() => setSegment("live"), 5000);
    } else {
      toast.warn('Room name and topics are required!', { delay: 10000 });
      console.error('missing room info');
    }
  };
  const closeRoom = () => {
    // TODO: close functionalities e.g confirmation dialog
    animate();
  };

  const _addTopics = () => {
    setSegment('topics');
  };

  return (
    <section className="">
      <div className={styles['audio-chat-header']}>
        <h2 className="">
          {creatingRoom ? styles[room.title] : styles['create your room']}
        </h2>
        <Close onClick={closeRoom}></Close>
      </div>
      <div className={styles['audio-chat-body']}>
        {creatingRoom ? (
          <>
            <div className={styles['creating-room-segment']}>
              <div className={styles['chat-room-topics-list']}>
                {room.topics.map((_topic) => (
                  <p key={_topic.slug} className={styles['detail-btn']}>
                    {_topic.name}
                  </p>
                ))}
              </div>
              <div className={styles['audio-chat-inner-body']}>
                <div className={styles['chat-participants-list']}>
                  {room.hosts.map((_user) => (
                    <RoomMember key={_user.id || _user._id} user={_user} />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <input
              onChange={handleTitleInputChange}
              type="text"
              value={room.title}
              className={styles['create-room-title']}
              placeholder="Name your room"
            />
            <div className={styles['audio-chat-inner-body']}>
              <p className={styles['audio-chat-instructions']}>
                What do you want to talk about?
              </p>
              {room.topics.length ? (
                <div>
                  <p className={styles['inner-title']}>Topics</p>
                  <TopicsList
                    list={room.topics}
                    addOption={true}
                    room={room}
                    setRoom={setRoom}
                    addTopics={_addTopics}
                  />
                </div>
              ) : (
                <ButtonContainer
                  className={`${styles['add-topics-btn']}`}
                  onClick={_addTopics}
                >
                  <Add></Add>
                  <span>Add Topics</span>
                </ButtonContainer>
              )}
            </div>

            <div>
              <div className={styles['select-private']}>
                <input
                  onChange={handlePrivateChange}
                  type="checkbox"
                  value={room.private}
                  className={styles['room-private-checkbox']}
                  id="room-private"
                />
                <label htmlFor="room-private"> Private </label>
              </div>
              <p className={styles['private-tip']}>
                Private rooms are only accessible via a private link shared to
                indiviual memebers. The room will not be listed in the public
                rooms page.
              </p>
            </div>
          </>
        )}
        <div className={styles['audio-chat-body-foot']}>
          {/* <button
            className={`${styles['btn']} ${styles['create-room-btn']}`}
            id="create-room-btn"
            onClick={_createRoom}
          >
            {creatingRoom ? 'Creating Room ...' : ' Create Room'}
          </button> */}
          <StyledButton
            onClick={_createRoom}
            name={creatingRoom ? 'Creating Room ...' : ' Create Room'}
          />
        </div>
      </div>
    </section>
  );
};

export default CreateRoom;
