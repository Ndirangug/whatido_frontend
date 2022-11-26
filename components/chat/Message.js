import { useSpring } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import moment from 'moment';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  DoubleCheckIcon,
  InnerContainer,
  InnerDiv,
  MessageContainer,
  MessageText,
  MessageWrapper,
  QuoteBackIcon,
  QuoteText,
  QuoteTextContainer,
  TimeText,
} from '../../styles/messegner.styles';
import XxsAvatar from '../utils/avatars/XxsAvatar';
import { TextBase } from '../utils/typography/Typography';

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
  console.log('msg', msg);

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

  return (
    <MessageWrapper myMessage={myMessage}>
      <MessageContainer {...bind()} style={{ x }}>
        {!myMessage && msg.withAvatar && <XxsAvatar src={friend?.photo} />}
        {/* {myMessage && <OptionComponent />} */}
        <InnerContainer>
          <InnerDiv myMessage={myMessage} withAvatar={msg.withAvatar}>
            {msg.withAvatar && (
              <TimeText myMessage={myMessage}>
                {moment(msg.createdAt).format('LT')}
              </TimeText>
            )}
            <MessageText myMessage={myMessage}>
              {/* {audioFile && (
                <AudioPlayer audioFile={audioFile} sending={sending} />
              )} */}
              <div>
                {/* {imgFileArray?.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setPreviewImageSrc(img?.cdnUrl);
                      setOpenImagePreview(true);
                    }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      src={img?.cdnUrl}
                      alt="pic"
                    />
                  </div>
                ))} */}
              </div>

              {msg.quote && (
                <QuoteTextContainer>
                  <QuoteBackIcon />
                  <div>
                    <TimeText myMessage={myMessage}>
                      {msg.quote.senderName.firstName}{' '}
                      {msg.quote.senderName.lastName}{' '}
                      {moment(msg.quote.time).format('LT, ddd MMM Do, YY')}
                    </TimeText>
                    <div className="quote-media-container">
                      {/* {quote?.imageUrl && (
                        <img
                          src={quote?.imageUrl}
                          alt=""
                          className="quote-img"
                        />
                      )} */}
                      <QuoteText>{msg.quote.text}</QuoteText>
                    </div>
                  </div>
                </QuoteTextContainer>
              )}
              {/* {share && <MediaComponent mediaID={share} />} */}
              {msg.message &&
                !msg.audioFile &&
                (msg.imgFileArray?.length === 0 || !msg.imgFileArray) && (
                  <TextBase>{msg.text}</TextBase>
                )}

              {msg.zoomLink && (
                <a
                  href={msg.zoomLink}
                  className="zoomLink"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {msg.zoomLink}
                </a>
              )}
              {myMessage && msg.read && <DoubleCheckIcon />}
            </MessageText>
          </InnerDiv>
          {myMessage && msg.withAvatar && (
            <XxsAvatar src={user?.imageUrl.cdnUrl} />
          )}
          {/* {!myMessage && <OptionComponent />} */}
        </InnerContainer>
      </MessageContainer>
    </MessageWrapper>
  );
}

export default memo(Message);
