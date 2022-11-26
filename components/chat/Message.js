import { useSpring } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import moment from 'moment';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DotIcon, MessageBox } from '../../styles/messegner.styles';
import { TextBase, TextxS } from '../utils/typography/Typography';

function Message({
  msg,
  myMessage,
  friend,
  setPreviewImageSrc,
  setOpenImagePreview,
  inputRef,
}) {
  const [options, setOptions] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  //   const handleClick = () => {
  //     setOptions((prev) => !prev);
  //   };

  //   const handleClickAway = () => {
  //     if (options === true) {
  //       setOptions(false);
  //     }
  //   };

  //quote message function
  const handleQuote = () => {
    setOptions(false);
    // dispatch(
    //   quoteMessage({ text: message, senderName: senderName, time: time })
    // );
    //focus on input
    inputRef.current?.focus();
  };
  //copy message function
  //   const handleCopy = () => {
  //     setOptions(false);
  //     navigator.clipboard.writeText(message);
  //   };
  //delete message functon
  //   const handleDelete = () => {
  //     setOptions(false);
  //     axios
  //       .delete(API_URL + "/message/" + _id)
  //       .then((res) => {
  //         socket.emit("deleteMessage", {
  //           data: res.data,
  //           recieverSlug: friend.slug,
  //         });
  //         dispatch(selfDispatch(res.data, DELETE_CONVERSATION_MESSAGE));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const bind = useGesture(
    {
      onDrag: ({ down, offset: [x] }) => {
        api.start({ x: down ? x : 0 });
      },
      onDragEnd: () =>
        !msg.audioFile &&
        (msg.imgFileArray?.length === 0 || !msg.imgFileArray) &&
        handleQuote(),
    },
    {
      drag: {
        bounds: { right: 50, left: 0 },
        threshold: 40,
        axis: 'x',
      },
    }
  );

  //   const OptionComponent = () => (
  //     <ClickAwayListener onClickAway={handleClickAway}>
  //       <div>
  //         <DotIcon onClick={handleClick} className="message-options" />
  //         {!sending && options && (
  //           <OptionContainer myMessage={myMessage}>
  //             {imgFileArray?.length === 0 && (
  //               <>
  //                 <OptionalText onClick={handleCopy}>Copy</OptionalText>
  //                 <OptionalText onClick={handleQuote}>Quote</OptionalText>
  //               </>
  //             )}
  //             {!myMessage && <OptionalText>Report a concern</OptionalText>}
  //             {myMessage && (
  //               <OptionalText onClick={handleDelete}>Remove</OptionalText>
  //             )}
  //           </OptionContainer>
  //         )}
  //       </div>
  //     </ClickAwayListener>
  //   );

  if (msg?.audioFile) return;
  if (msg?.imgFileArray.length !== 0) return;

  return (
    <MessageBox myMessage={myMessage}>
      {myMessage && <DotIcon className="message-options" />}
      <div className="message-container">
        <TextxS> {moment(msg.createdAt).format('LT')}</TextxS>
        <div className="message-content">
          <TextBase>{msg.text}</TextBase>
        </div>
      </div>
      {!myMessage && <DotIcon className="message-options" />}
    </MessageBox>
  );
}

export default memo(Message);
