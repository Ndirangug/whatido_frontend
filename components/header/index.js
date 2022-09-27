import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import { HeaderContainer } from '../../styles/header';

const Header = () => {
  const authenticated = true;

  return (
    <HeaderContainer>
      <div className="inner-head-container">
        <div className="header-left flex-content">
          <Image
            src="/whatido_logo.svg"
            alt="whatido"
            width={160}
            height={40}
          />
        </div>
        <div className="header-content">
          <div className="search-container">
            <input type="text" className="search-input" />
          </div>
          <div className="header-right flex-content">
            <Button colorScheme="blue" size="sm">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
