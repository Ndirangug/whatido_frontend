import Image from 'next/image';
import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <div className="header-flex">
        <div className="flex">
          <Image
            src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
            alt="whatido"
            width={30}
            height={30}
            className="header-img"
          />
          <h1 className="header-text">whatido</h1>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
