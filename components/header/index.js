import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BiSearchAlt } from 'react-icons/bi';
import Button from '../utils/buttons/Button';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { HeaderContainer } from '../../styles/header.styles';
import CreateIcon from '../utils/icons/CreateIcon';
import NotificationIcon from '../utils/icons/NotificationIcon';
import WalletIcon from '../utils/icons/WalletIcon';

const Header = () => {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.auth.currentUser);

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
          <Link href="/">
            <Image
              src="/whatido_logo.svg"
              alt="whatido"
              width={200}
              height={40}
              loading="eager"
            />
          </Link>
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
          <div className="create-container">
            <CreateIcon />
          </div>
          <div className="header-right">
            {!authenticated && (
              <Stack direction="row" spacing={2}>
                <Button name={'log in'} inLine evenHandler={handleLogin} />
                <Button name={'sign up'} evenHandler={handleSignup} />
              </Stack>
            )}
            {authenticated && (
              <Stack direction="row" spacing={2}>
                <NotificationIcon />
                <WalletIcon />
                <Avatar alt={user?.firstName} src={user?.imageUrl?.cdnUrl} />
              </Stack>
            )}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
