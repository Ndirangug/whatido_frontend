import Image from 'next/image';
import { useRouter } from 'next/router';
import { BiSearchAlt } from 'react-icons/bi';
import { HeaderContainer } from '../../styles/header.styles';
import Button from '../utils/Button';

const Header = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push({
      query: {
        login: true,
      },
    });
  };
  const handleSignup = () => {
    router.push({
      query: {
        signup: true,
      },
    });
  };

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
            <Button name={'log in'} inLine evenHandler={handleLogin} />
            <Button name={'sign in'} evenHandler={handleSignup} />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
