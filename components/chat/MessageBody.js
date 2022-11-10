import moment from 'moment';
import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { IoIosArrowDown } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { API_URL } from '../../constants/api';
import { setMessageData } from '../../store/reducers/messenger_reducer';
import {
  ConversationDate,
  ImagePreviewModal,
  ImagePreviewModalContainer,
  ImagePreviewModalContent,
  MessageBodyContainer,
} from '../../styles/messegner.styles';
import { TextSm } from '../utils/typography/Typography';
import Message from './Message';

function MessageBody({ scrollRef, conversationId, friend, inputRef }) {
  const [cookies] = useCookies(['user']);
  const [previewImageSrc, setPreviewImageSrc] = useState(null);
  const [openImagePreview, setOpenImagePreview] = useState(false);
  const [scrollView, setScrollView] = useState(false);
  const { data, isValidating, size, setSize } = useSWRInfinite(
    (index) =>
      `${API_URL}/message/page/${conversationId}/${cookies?.user?.slug}?page=${index}`
  );
  const messageCountUrl = `${API_URL}/message/count/${conversationId}/${cookies?.user?.slug}`;
  const { data: messageCount } = useSWR(messageCountUrl);
  const hasMore = size * 20 <= messageCount;
  const dispatch = useDispatch();

  const messagesArray = useSelector((state) => state.messenger.messages);

  const groupedMessages = filteredMessages?.reduce((acc, message) => {
    const date = moment(message.createdAt)?.calendar(null, {
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      lastWeek: '[last] dddd',
      nextWeek: 'dddd',
      sameElse: 'ddd, L',
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {});

  const filteredMessages = messagesArray.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  //arrange filtered messages into array of date groups and messages of each day to be in chronological order
  const dateSortedMessages = Object?.keys(groupedMessages)?.map((date) => {
    return {
      date: date,
      messages: groupedMessages[date],
    };
  });

  const handleScrollToView = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleInfiniteScroll = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const scrollPosition = -scrollTop + clientHeight;

    //to display icon at the bottom of the message screen
    if (scrollTop > -200) {
      setScrollView(false);
    } else {
      setScrollView(true);
    }
    if (scrollHeight - scrollPosition < 250) {
      if (!isValidating && hasMore) {
        setSize(size + 1);
      }
    }
  };

  const handleCloseImagePreview = () => {
    setOpenImagePreview(false);
    setPreviewImageSrc(null);
  };

  useEffect(() => {
    if (data) {
      dispatch(setMessageData(data));
    }
  }, [data, dispatch]);

  return (
    <MessageBodyContainer
      onScroll={handleInfiniteScroll}
      isScrollView={scrollView}
    >
      <div ref={scrollRef}></div>
      <IoIosArrowDown className="icon" onClick={handleScrollToView} />
      {dateSortedMessages?.map(({ date, messages }) => (
        <>
          {messages
            .sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map(
              ({
                sender,
                text,
                createdAt,
                read,
                senderName,
                withAvatar,
                quote,
                _id,
                imgFileArray,
                audioFile,
                zoomLink,
                share,
              }) => (
                <Message
                  friend={friend}
                  myMessage={cookies?.user?.slug === sender}
                  message={text}
                  time={createdAt}
                  read={read}
                  _id={_id}
                  key={_id}
                  quote={quote}
                  share={share}
                  zoomLink={zoomLink}
                  setPreviewImageSrc={setPreviewImageSrc}
                  setOpenImagePreview={setOpenImagePreview}
                  imgFileArray={imgFileArray}
                  audioFile={audioFile}
                  inputRef={inputRef}
                  senderName={senderName}
                  withAvatar={withAvatar}
                />
              )
            )}
          <ConversationDate key={date}>
            <TextSm>{date}</TextSm>
          </ConversationDate>
        </>
      ))}

      {/* full image preview modal */}
      <ImagePreviewModal
        open={openImagePreview}
        onClose={handleCloseImagePreview}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ImagePreviewModalContainer>
          <ImagePreviewModalContent>
            <Image
              height={100}
              width={100}
              objectFit="contain"
              src={previewImageSrc}
              alt="no pic"
            />
          </ImagePreviewModalContent>
          <RiCloseCircleLine
            className="close_icon"
            onClick={() => {
              setOpenImagePreview(false);
              setPreviewImageSrc(null);
            }}
          />
        </ImagePreviewModalContainer>
      </ImagePreviewModal>
    </MessageBodyContainer>
  );
}

export default MessageBody;
