import {
  SelectContainer,
  SidebarContainer,
} from '../../styles/messegner.styles';
import { Text2XL, TextBase } from '../utils/typography/Typography';

function Sidebar() {
  return (
    <SidebarContainer>
      <Text2XL>messaging</Text2XL>
      <div className="select-contaier">
        <SelectContainer selected>
          <TextBase>chat</TextBase>
        </SelectContainer>
        <SelectContainer>
          <TextBase>stories</TextBase>
        </SelectContainer>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
