import { IoIosArrowDown } from 'react-icons/io';
import { MessageBodyContainer } from '../../styles/messegner.styles';

function MessageBody({ scrollRef }) {
  const handleScrollToView = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <MessageBodyContainer>
      {' '}
      <div ref={scrollRef}></div>
      <IoIosArrowDown className="icon" onClick={handleScrollToView} />
    </MessageBodyContainer>
  );
}

export default MessageBody;
