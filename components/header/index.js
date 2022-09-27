import Image from 'next/image';
import { BiSearchAlt } from 'react-icons/bi';
import { HeaderContainer } from '../../styles/header.styles';
import Button from '../utils/Button';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner-head-container">
        <div className="header-left">
          <Image
            src="/whatido_logo.svg"
            alt="whatido"
            width={200}
            height={40}
            loading="eager"
          />
        </div>
        <div className="header-content">
          <div className="search-container">
            <BiSearchAlt className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="search..."
            />
          </div>
          <div className="header-right flex-content">
            <Button
              name={'log in'}
              inLine
              evenHandler={() => console.log('click log in')}
            />
            <Button
              name={'sign in'}
              evenHandler={() => console.log('click sign in')}
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
