import { SearchBarContainer } from '../../styles/messegner.styles';
import SearchinIcon from '../utils/icons/SearchinIcon';

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchinIcon />
      <input type="text" className="search-input" placeholder="search" />
    </SearchBarContainer>
  );
}

export default SearchBar;
