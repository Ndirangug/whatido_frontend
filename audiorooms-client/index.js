import store from '../store';
import { insertRoom, sendEmailInvitation, sendMessage } from './helpers';
import { leaveCall, localStream, recreatePeer } from './peerEvents';
import { socket } from './socketEvents';
//import uuid from "react-uuid";
import { Cookies } from 'react-cookie';
//import { sendMessageToUser } from '../actions/messenger'; //todo messenger not working yet
import { CLIENT_ROOT_URL } from '../constants/api';
import { CALL_REJECTED } from '../constants/audio-room';
import {
  addToWaitlist,
  clearRoom,
  toggleMuteAudio as toggleMuteAudioAction,
} from '../store/actions/audio_chat_room';
//import { sendNotification } from '../subscription'; //todo notification not working yet

const cookies = new Cookies().getAll();
//register callBack for on call

/*
    Try to create a 'room' given roomInfo and initial participants
    @param roomInfo: {title: string, topics: [string], otherUser: Object}
    @param audioElement: string - the id of the element to attach the audio stream to
    @param callBack: function - the callback to call when the call is complete 
    @returns {Promise} - An  promise that resolves to a Room object when successful or an Error if creating the room fails
*/
export const createRoom = async (roomInfo, _callBack = null) => {
  console.log('creating room inside creating room', roomInfo);

  try {
    const room = await insertRoom(roomInfo);
    console.log('created room in create room', room);

    return room.data;
  } catch (error) {
    return error;
  }
};

// invite participant
export const inviteParticipant = async (
  roomInfo,
  recepient,
  role = 'Audience',
  forceRecreatePeer = true,
  _callBack = () => {}
) => {
  //map _id filed to id field

  try {
    const hostName = `${
      store.getState().auth.currentUser.firstName ||
      store.getState().auth.currentUser.profile.firstName
    } ${
      store.getState().auth.currentUser.lastName ||
      store.getState().auth.currentUser.profile.lastName
    }`;
    console.log('host name is ', hostName);
    console.log('recepeint inviting', recepient);

    const sendInvitation = async () => {
      socket
        .timeout(90000) // 90 seconds
        .emit(
          'invite-to-call',
          {
            hostId: store.getState().auth.currentUser._id,
            recepientId: recepient.id ?? recepient._id,
            room: roomInfo,
            role,
          },
          (err, response) => {
            if (err) {
              console.error('invite to call timed out', err);

              // sendAudioRoomNotification(
              //   user,
              //   roomInfo,
              //   `Hi, You missed your invitation to an audio room conversation on ${roomInfo.title} from ${cookies?.user?.firstName}. Click the link below to join the room or access the recording`,
              //   `${hostName} invited you to an audio room conversation on ${roomInfo.title}`
              // );
            }

            console.log('invite to call response', response);
            if (response === CALL_REJECTED) {
              sendAudioRoomNotification(
                recepient,
                roomInfo,
                `Hi, You rejected your invitation to an audio room conversation on ${roomInfo.title} from ${cookies?.user?.firstName}. Click the link below to join the room or access the recording`,
                `${hostName} invited you to an audio room conversation on ${roomInfo.title}`
              );
            }
          }
        );
    };

    if (forceRecreatePeer) {
      recreatePeer(() => {
        console.log('recreated peer now sending invitation');
        sendInvitation();
      });
    } else {
      console.log('send invitation without recreating peer');
      sendInvitation();
    }

    console.log('sending invite notifications');
    sendAudioRoomNotification(
      recepient,
      roomInfo,
      `Hi.${hostName} invited you to an audio room conversation on ${roomInfo.title}. Click the link below to join the room or access the recording`,
      `${hostName} invited you to an audio room conversation on ${roomInfo.title}`
    );

    store.dispatch(addToWaitlist(recepient));
    return { ...recepient, audioRoomRole: role };
  } catch (error) {
    console.log('error inviting participant', error);
    throw error;
  }
};

export const toggleRaiseHand = async (userId, roomId) => {
  // console.log("before toggle rise " + store.getState().audioRoom.handRaised);
  const newState = !store.getState().audioRoom.handRaised ?? true;
  // console.log("toggle raise hand, " + newState);

  if (newState) {
    socket.emit('raise-hand', { _id: userId, roomId });
  } else {
    socket.emit('unraise-hand', { _id: userId, roomId });
  }
};

export const toggleMuteAudio = (userId, roomId) => {
  localStream.getAudioTracks().forEach((track) => {
    track.enabled = !track.enabled;
  });

  store.dispatch(toggleMuteAudioAction());
  socket.emit('user-mute-audio', {
    _id: userId,
    roomId,
    isMuted: store.getState().audioRoom.muted,
  });
};

export const leaveRoom = (room, user, closeRoom = false) => {
  socket.emit('user-left-audio-room', {
    roomId: room.id ?? room._id,
    userId: user.id ?? user._id,
    closeRoom,
  });
  store.dispatch(clearRoom());
  leaveCall();

  clearInterval(window.intervalId);
};

export const playAudio = (src, loop = false) => {
  const audioElement = new Audio(src);
  audioElement.loop = loop;
  audioElement
    .play()
    .then((_result) => {})
    .catch((err) => {
      console.error('error playing audio', err);
    });
};

export const updateUserRole = async (userId, roomId, role) => {
  console.log(
    'updating user role ' + role + ' for user ' + userId + ' in room ' + roomId
  );
  socket.emit('update-user-role', { userId, roomId, role });
};

export const reconnectPeer = () => {
  recreatePeer();
};

export const sendAudioRoomNotification = (
  recepient,
  room,
  messageText,
  notificationTitle
) => {
  console.log('sending call notification via notifications channel', room);

  const roomUrl = CLIENT_ROOT_URL + '/rooms/?id=' + room.id;
  const currentUser = store.getState().auth.currentUser;

  console.log('user sending notification to recepient', recepient);

  // const emailNotificationData = {
  //   recieverName: `${recepient.firstName ?? recepient.profile.firstName} ${
  //     recepient.lastName ?? recepient.profile.lastName
  //   }`,
  //   message: null,
  //   senderName: `${currentUser.firstName ?? currentUser?.profile?.firstName} ${
  //     currentUser.lastName ?? currentUser?.profile?.lastName
  //   }`,
  //   recieverEmail: recepient.email ?? '',
  //   url: roomUrl,
  //   baseUrl: CLIENT_ROOT_URL,
  //   endpoint: 'sendAudioRoomNotification',
  //   roomTitle: room.title,
  // };

  //console.log('conversation starter user object', currentUser);
  // const conversationStarter = {
  //   recieverSlug: recepient.slug ?? '',
  //   senderSlug: currentUser?.slug ?? '',
  //   firstName: currentUser.firstName ?? currentUser?.profile?.firstName,
  //   lastName: currentUser.lastName ?? currentUser?.profile?.lastName,
  //   //link: CLIENT_ROOT_URL + "/rooms/?id=" + room._id,
  //   quote: null,
  //   // messageId: uuid(),
  //   //text: `Hi, ${cookies?.user?.firstName} has invited you to their audio room discussion on ${room.title}`,
  //   text: messageText + '#AUDIOROOMID' + room.id,
  //   //share: null,
  //   emailNotificationData: emailNotificationData,
  // };
  sendMessage(recepient, messageText + '#AUDIOROOMID' + room.id);
  //store.dispatch(sendMessageToUser(conversationStarter));
  console.log('sent audio room text message notification not enabled.skipping');

  // let pushNotificationData = {
  //   //title: `${conversationStarter.firstName} started an audio room`,
  //   title: notificationTitle,
  //   description: conversationStarter.text,
  //   userSlug: conversationStarter.recieverSlug,
  //   action: 'Join Room',
  //   senderSlug: `${conversationStarter.senderSlug}`,
  //   endUrl: `/rooms/?id=${room.id}`,
  //   redirectUrl: null,
  // };

  //sendNotification(pushNotificationData);
  console.log('sent audio room push notification not enabled.skipping');

  sendEmailInvitation(
    roomUrl,
    CLIENT_ROOT_URL,
    recepient.firstName ?? recepient.profile.firstName,
    recepient.email ?? '',
    `${currentUser.firstName ?? currentUser?.profile?.firstName} ${
      currentUser.lastName ?? currentUser?.profile?.lastName
    }`,
    messageText,
    room.title
  );
  console.log('sent audio room email notification');
  //toast.success("audio room notifictaion sent");
};

export const startPingRoom = (roomId) => {
  window.intervalId = setInterval(() => {
    socket.emit('ping-room', { roomId });
    console.log(`pinging room ${roomId}`);
  }, 240000); //send ping every 4 minutes
};
