import Link from 'next/link';
import {
  SelectContainer,
  SidebarContainer,
} from '../../styles/messegner.styles';
import { TextBase } from '../utils/typography/Typography';
import ConversationList from './ConversationList';
import SearchBar from './SearchBar';

function Sidebar() {
  return (
    <SidebarContainer>
      <div className="select-contaier">
        <SelectContainer selected>
          <TextBase>chat</TextBase>
        </SelectContainer>
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
