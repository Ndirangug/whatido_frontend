import Image from 'next/image';
import { HeaderContainer } from '../../styles/header.styles';
import Button from '../utils/Button';

const Header = () => {
  const authenticated = true;

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
            <input type="text" className="search-input" />
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
