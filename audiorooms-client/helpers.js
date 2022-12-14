import axios from 'axios';
import { Cookies } from 'react-cookie';
import uuid from 'react-uuid';
import { API_URL, AUDIOROOM_API_URL } from '../constants/api';
import store from '../store';
import { postNewMessage, socket } from '../store/actions/messenger_actions';
import { addMessageData } from '../store/reducers/messenger_reducer';

export const cookies = new Cookies();

export const insertRoom = async (roomInfo) => {
  console.log('before inserting room');
  const currentUser = await store.getState().auth.currentUser;
  console.log('currentuser', currentUser);
  console.log(roomInfo);
  try {
    const room = await axios.post(`${AUDIOROOM_API_URL}/rooms`, {
      title: roomInfo.title,
      topics: roomInfo.topics.map((topic) => topic.name),
      participants: [{ id: currentUser._id, role: 'Host' }],
      isPrivate: roomInfo.private,
    });

    console.log('room created in insert room');
    console.log(room);
    return room;
  } catch (error) {
    console.log('error in insert room in helper', error);
    throw new Error(error.response.data.message);
  }
};

export const userAvailable = (user) => {
  return user.peerId !== null;
};

// export const refetchPeerId = async (userId) => {
//   try {
//     const updatedUser = await axios.get(
//       `${API_URL}/experts/refetchPeerId/${userId}`
//     );
//     console.log("refetch peer id client response", updatedUser);
//     return updatedUser.data;
//   } catch (error) {
//     console.log(error); //TODO REMOVE THIS LOG STATEMENT
//     throw new Error(error);
//   }
// };

// export const refetchUser = async (userId, role) => {
//   const token = cookies.get("token");
//   const updatedUser = await axios.patch(
//     `${API_URL}/experts/${userId}`,
//     {
//       audioRoomRole: role,
//     },
//     {
//       headers: { Authorization: token },
//     }
//   );
//   console.log("updated user");
//   console.log(updatedUser);

//   return updatedUser.data;
// };

export const sendEmailInvitation = async (
  url,
  baseUrl,
  receiverName,
  receiverEmail,
  senderName,
  message,
  roomTitle
) => {
  console.log(`send email ${url} to ${receiverEmail}`);

  try {
    const room = await axios.post(
      `${AUDIOROOM_API_URL}/notifications/emailInvite`,
      {
        receiverName,
        receiverEmail,
        url,
        baseUrl,
        message,
        senderName,
        roomTitle,
      }
    );

    console.log('sent email invitation');
    console.log(room);
    return room;
  } catch (error) {
    console.log('error in insert room in helper', error);
    throw new Error(error.response.data.message);
  }
};

export const sendMessage = async (recepient, messageText) => {
  try {
    let conversation;
    const token = store.getState().auth.token;
    console.log('token', token);
    const currentUser = await store.getState().auth.currentUser;
    const conversationUrl = `${API_URL}/conversations/find/${currentUser.slug}/${recepient.slug}`;

    const response = await axios.get(
      conversationUrl,
      {},
      { headers: { Authorization: token } }
    );
    conversation = response.data;
    console.log('conversation in send audioroom', conversation);

    const message = {
      conversationId: conversation?._id || null,
      messageId: uuid(),
      sender: currentUser.slug,
      reciever: recepient?.slug,
      text: messageText,
      withAvatar: false,
      read: false,
      quote: null,
      senderName: {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
      },
      blocked: [],
    };
    console.log('construed message', message);

    // setSendingMessage((prev) => [...prev, { ...message, time: new Date() }]);
    const res = await postNewMessage(message, token);
    store.dispatch(addMessageData(res.data));
    // setSendingMessage((prev) =>
    //   prev.filter((m) => m.messageId !== res.data.messageId)
    // );

    socket.emit('sendMessage', {
      data: res.data,
      recieverSlug: recepient?.slug,
    });
  } catch (err) {
    console.log('error in send message in audiorooms helper', err);
  }
};
