import { SelectTabContainer } from '../../styles/profile.styles';
import { TextxS } from '../utils/typography/Typography';

function SelectTab({ Icon, count, selected, handleClick }) {
  return (
    <SelectTabContainer selected={selected} onClick={handleClick}>
      <div className="feed-icon">
        <Icon selected={selected} />
        <div className="text">
          <TextxS>{count}</TextxS>
        </div>
      </div>
    </SelectTabContainer>
  );
}

export default SelectTab;
