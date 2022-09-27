import Image from 'next/image';
import { HeaderContainer } from '../../styles/header.styles';

const Header = () => {
  const authenticated = true;

  return (
    <HeaderContainer>
      <div className="inner-head-container">
        <div className="header-left flex-content">
          <Image
            src="/whatido_logo.svg"
            alt="whatido"
            width={200}
            height={50}
          />
        </div>
        <div className="header-content">
          <div className="search-container">
            <input type="text" className="search-input" />
          </div>
          <div className="header-right flex-content">
            <p>login</p>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
