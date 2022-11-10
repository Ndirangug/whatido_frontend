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
        <SelectContainer>
          <TextBase>stories</TextBase>
        </SelectContainer>
      </div>
      <SearchBar />
      <ConversationList />
    </SidebarContainer>
  );
}

export default Sidebar;
