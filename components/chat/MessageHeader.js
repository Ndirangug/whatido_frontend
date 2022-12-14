import Link from 'next/link';
import { MessageHeaderContainer } from '../../styles/messegner.styles';
import BaseAvatar from '../utils/avatars/BaseAvatar';
import AudioRoomButton from '../utils/buttons/AudioRoomButton';
import BackIcon from '../utils/icons/BackIcon';
import OptionFlatIcon from '../utils/icons/OptionFlatIcon';
import VideoCallIcon from '../utils/icons/VideoCallIcon';
import { TextLG } from '../utils/typography/Typography';

function MessageHeader({ friend }) {
  return (
    <MessageHeaderContainer>
      <div className="flex-center sm-gap ">
        <Link href={'/messenger/chat'}>
          <BackIcon />
        </Link>
        <Link href={`/explore/expert/${friend?.slug}`}>
          <div className="flex-center xs-gap">
            <BaseAvatar src={friend?.photo} />
            <TextLG
              style={{
                cursor: 'pointer',
              }}
            >
              {friend?.firstName + '  ' + friend?.lastName}
            </TextLG>
            {/* <div className="info"></div> */}
          </div>
        </Link>
      </div>
      <div className="flex-center sm-gap ">
        <AudioRoomButton icon otherUser={friend} />
        <VideoCallIcon />
        <OptionFlatIcon />
      </div>
    </MessageHeaderContainer>
  );
}

export default MessageHeader;
