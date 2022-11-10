import { useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import moment from "moment";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    quoteMessage
} from "../../../../actions/messenger";


import { DoubleCheckIcon, InnerContainer, InnerDiv, MessageContainer, MessageText, MessageWrapper, QuoteBackIcon, QuoteText, QuoteTextContainer, TimeText } from "../../styles/messegner.styles";
import XxsAvatar from "../utils/avatars/XxsAvatar";
import { TextBase } from "../utils/typography/Typography";

function Message({
  message,
  myMessage,
  time,
  read,
  senderName,
  withAvatar,
  quote,
  _id,
  friend,
  inputRef,
  sending,
  imgFileArray,
  setPreviewImageSrc,
  setOpenImagePreview,
  audioFile,
  zoomLink,
  share,
}) {
  const [options, setOptions] = useState(false);
  const dispatch = useDispatch();
  const reduxUser = useSelector(({ user }) => user.profile);
  // console.log("shared", share);

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
    dispatch(
      quoteMessage({ text: message, senderName: senderName, time: time })
    );
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
        !audioFile &&
        (imgFileArray?.length === 0 || !imgFileArray) &&
        handleQuote(),
    },
    {
      drag: {
        bounds: { right: 50, left: 0 },
        threshold: 40,
        axis: "x",
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
        {!myMessage && withAvatar && <XxsAvatar src={friend?.photo} />}
        {/* {myMessage && <OptionComponent />} */}
        <InnerContainer>
          <InnerDiv myMessage={myMessage} withAvatar={withAvatar}>
            {withAvatar && (
              <TimeText myMessage={myMessage}>
                {moment(time).format("LT")}
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

              {quote && (
                <QuoteTextContainer>
                  <QuoteBackIcon />
                  <div>
                    <TimeText myMessage={myMessage}>
                      {quote.senderName.firstName} {quote.senderName.lastName}{" "}
                      {moment(quote.time).format("LT, ddd MMM Do, YY")}
                    </TimeText>
                    <div className="quote-media-container">
                      {/* {quote?.imageUrl && (
                        <img
                          src={quote?.imageUrl}
                          alt=""
                          className="quote-img"
                        />
                      )} */}
                      <QuoteText>{quote.text}</QuoteText>
                    </div>
                  </div>
                </QuoteTextContainer>
              )}
              {/* {share && <MediaComponent mediaID={share} />} */}
              {message &&
                !audioFile &&
                (imgFileArray?.length === 0 || !imgFileArray) && (
                  <TextBase>{message}</TextBase>
                )}

              {zoomLink && (
                <a
                  href={zoomLink}
                  className="zoomLink"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {zoomLink}
                </a>
              )}
              {myMessage && read && <DoubleCheckIcon />}
            </MessageText>
          </InnerDiv>
          {myMessage && withAvatar && (
            <XxsAvatar src={reduxUser?.imageUrl?.cdnUrl} />
          )}
          {/* {!myMessage && <OptionComponent />} */}
        </InnerContainer>
      </MessageContainer>
    </MessageWrapper>
  );
}

export default memo(Message);
