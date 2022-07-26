import Image from 'next/image';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner-head-container">
        <div className="header-left flex-content">
          <Image
            src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
            alt="whatido"
            width={40}
            height={40}
            className="header-image"
          />
          <h1 className="header-logo">whatido</h1>
        </div>
        <div className="header-content">
          {/* <div className="search-container">
            <input type="text" className="search-input" />
          </div> */}
          <div className="header-right flex-content">
            <p>home</p>
            <p>home</p>
            <p>home</p>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
