import Link from 'next/link';
import {
  SelectContainer,
  SidebarContainer,
} from '../../styles/messegner.styles';
import { TextBase } from '../utils/typography/Typography';
import ConversationList from './ConversationList';
import SearchBar from './SearchBar';

function Sidebar({ chatScreen }) {
  return (
    <SidebarContainer chatScreen={chatScreen}>
      <div className="select-contaier">
        <Link href={'/messenger/chat'}>
          <SelectContainer selected>
            <TextBase>chat</TextBase>
          </SelectContainer>
        </Link>
        <Link href={'/messenger/stories'}>
          <SelectContainer>
            <TextBase>stories</TextBase>
          </SelectContainer>
        </Link>
      </div>
      <SearchBar page={'chat'} />
      <ConversationList />
    </SidebarContainer>
  );
}

export default Sidebar;
