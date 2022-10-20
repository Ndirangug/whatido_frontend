import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledIconBtn = styled(IconButton)`
  border-radius: 0;
  padding: 0;
  border-top: ${({ selected }) => (selected ? '2px solid #ffffff' : 'none')};
`;

function NotificationsIcon() {
  const [selectedRoute, setSelectedRoute] = useState(false);
  const router = useRouter();
  // let color = selectedRoute ? '#ffffff' : '#808080';

  const authenticated = useSelector((state) => state.auth.authenticated);

  const goNotifications = () => {
    if (!authenticated) {
      router.push({
        query: {
          login: true,
        },
      });
    } else {
      router.push(`/notifications`);
    }
  };

  useEffect(() => {
    router.asPath.includes('/notifications')
      ? setSelectedRoute(true)
      : setSelectedRoute(false);
  }, [router.asPath]);

  return (
    <StyledIconBtn selected={selectedRoute} onClick={goNotifications}>
      <svg
        width="65"
        height="62"
        viewBox="0 0 65 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M32.5001 30.0445C32.8501 30.0364 33.1859 29.9049 33.4482 29.6731C33.7105 29.4413 33.8824 29.1241 33.9335 28.7778H31.0112C31.0637 29.1336 31.2436 29.4581 31.5175 29.6911C31.7914 29.9241 32.1406 30.0497 32.5001 30.0445Z"
            fill="#F3F3F3"
          />
          <path
            d="M40.7499 26.628L40.561 26.4613C40.0251 25.9839 39.5561 25.4364 39.1666 24.8336C38.7411 24.0016 38.4861 23.0931 38.4166 22.1613V19.4169C38.4143 19.0835 38.3846 18.7509 38.3277 18.4224C37.3866 18.229 36.5413 17.7163 35.9349 16.9712C35.3285 16.2261 34.9982 15.2943 34.9999 14.3336V13.9836C34.4198 13.6981 33.7967 13.5104 33.1554 13.428V12.728C33.1554 12.5313 33.0773 12.3426 32.9382 12.2036C32.7991 12.0645 32.6105 11.9863 32.4138 11.9863C32.2171 11.9863 32.0284 12.0645 31.8893 12.2036C31.7503 12.3426 31.6721 12.5313 31.6721 12.728V13.4558C30.2364 13.6583 28.9224 14.3734 27.9728 15.4691C27.0232 16.5647 26.502 17.967 26.5054 19.4169V22.1613C26.4359 23.0931 26.1809 24.0016 25.7554 24.8336C25.3726 25.4349 24.9111 25.9823 24.3832 26.4613L24.1943 26.628V28.1947H40.7499V26.628Z"
            fill="white"
          />
          <path
            d="M39.1665 17.1112C40.7006 17.1112 41.9442 15.8676 41.9442 14.3334C41.9442 12.7993 40.7006 11.5557 39.1665 11.5557C37.6323 11.5557 36.3887 12.7993 36.3887 14.3334C36.3887 15.8676 37.6323 17.1112 39.1665 17.1112Z"
            fill="#FF0000"
          />
          <path
            d="M13.3361 39H14.0361V46H13.4361L9.53609 40.3V46H8.83609V39H9.43609L13.3361 44.7V39ZM19.315 45.37C18.8083 45.87 18.1883 46.12 17.455 46.12C16.7216 46.12 16.0983 45.87 15.585 45.37C15.0783 44.8633 14.825 44.24 14.825 43.5C14.825 42.76 15.0783 42.14 15.585 41.64C16.0983 41.1333 16.7216 40.88 17.455 40.88C18.1883 40.88 18.8083 41.1333 19.315 41.64C19.8283 42.14 20.085 42.76 20.085 43.5C20.085 44.24 19.8283 44.8633 19.315 45.37ZM16.055 44.91C16.435 45.29 16.9016 45.48 17.455 45.48C18.0083 45.48 18.475 45.29 18.855 44.91C19.235 44.5233 19.425 44.0533 19.425 43.5C19.425 42.9467 19.235 42.48 18.855 42.1C18.475 41.7133 18.0083 41.52 17.455 41.52C16.9016 41.52 16.435 41.7133 16.055 42.1C15.675 42.48 15.485 42.9467 15.485 43.5C15.485 44.0533 15.675 44.5233 16.055 44.91ZM23.3338 41.64H21.8938V44.67C21.8938 44.9433 21.9471 45.14 22.0538 45.26C22.1604 45.3733 22.3204 45.4333 22.5338 45.44C22.7471 45.44 23.0138 45.4333 23.3338 45.42V46C22.6338 46.1067 22.1071 46.0567 21.7538 45.85C21.4071 45.6433 21.2338 45.25 21.2338 44.67V41.64H20.1838V41H21.2338V39.8L21.8938 39.6V41H23.3338V41.64ZM24.6958 39.8C24.6024 39.8933 24.4891 39.94 24.3558 39.94C24.2224 39.94 24.1091 39.8933 24.0158 39.8C23.9224 39.7067 23.8758 39.5933 23.8758 39.46C23.8758 39.3267 23.9224 39.2133 24.0158 39.12C24.1091 39.0267 24.2224 38.98 24.3558 38.98C24.4891 38.98 24.6024 39.0267 24.6958 39.12C24.7891 39.2133 24.8358 39.3267 24.8358 39.46C24.8358 39.5933 24.7891 39.7067 24.6958 39.8ZM24.0258 46V41H24.6858V46H24.0258ZM29.4383 41V46H28.7783V41.64H26.7383V46H26.0783V41.64H25.2283V41H26.0783V40.8C26.0783 39.52 26.7783 38.88 28.1783 38.88C28.4583 38.88 28.7783 38.92 29.1383 39V39.6C28.825 39.5467 28.505 39.52 28.1783 39.52C27.6783 39.52 27.3116 39.6167 27.0783 39.81C26.8516 40.0033 26.7383 40.3333 26.7383 40.8V41H29.4383ZM32.7566 46.12C32.0032 46.12 31.3766 45.87 30.8766 45.37C30.3766 44.8633 30.1266 44.24 30.1266 43.5C30.1266 42.76 30.3766 42.14 30.8766 41.64C31.3766 41.1333 32.0032 40.88 32.7566 40.88C33.2499 40.88 33.6932 41 34.0866 41.24C34.4799 41.4733 34.7666 41.79 34.9466 42.19L34.4066 42.5C34.2732 42.2 34.0566 41.9633 33.7566 41.79C33.4632 41.61 33.1299 41.52 32.7566 41.52C32.2032 41.52 31.7366 41.7133 31.3566 42.1C30.9766 42.48 30.7866 42.9467 30.7866 43.5C30.7866 44.0533 30.9766 44.5233 31.3566 44.91C31.7366 45.29 32.2032 45.48 32.7566 45.48C33.1299 45.48 33.4632 45.3933 33.7566 45.22C34.0499 45.04 34.2799 44.8 34.4466 44.5L34.9966 44.82C34.7899 45.22 34.4866 45.5367 34.0866 45.77C33.6866 46.0033 33.2432 46.12 32.7566 46.12ZM39.7873 41H40.4473V46H39.7873V45.02C39.3273 45.7533 38.654 46.12 37.7673 46.12C37.054 46.12 36.444 45.8667 35.9373 45.36C35.4373 44.8533 35.1873 44.2333 35.1873 43.5C35.1873 42.7667 35.4373 42.1467 35.9373 41.64C36.444 41.1333 37.054 40.88 37.7673 40.88C38.654 40.88 39.3273 41.2467 39.7873 41.98V41ZM36.4173 44.91C36.7973 45.29 37.264 45.48 37.8173 45.48C38.3706 45.48 38.8373 45.29 39.2173 44.91C39.5973 44.5233 39.7873 44.0533 39.7873 43.5C39.7873 42.9467 39.5973 42.48 39.2173 42.1C38.8373 41.7133 38.3706 41.52 37.8173 41.52C37.264 41.52 36.7973 41.7133 36.4173 42.1C36.0373 42.48 35.8473 42.9467 35.8473 43.5C35.8473 44.0533 36.0373 44.5233 36.4173 44.91ZM44.0867 41.64H42.6467V44.67C42.6467 44.9433 42.7001 45.14 42.8067 45.26C42.9134 45.3733 43.0734 45.4333 43.2867 45.44C43.5001 45.44 43.7667 45.4333 44.0867 45.42V46C43.3867 46.1067 42.8601 46.0567 42.5067 45.85C42.1601 45.6433 41.9867 45.25 41.9867 44.67V41.64H40.9367V41H41.9867V39.8L42.6467 39.6V41H44.0867V41.64ZM45.4487 39.8C45.3554 39.8933 45.2421 39.94 45.1087 39.94C44.9754 39.94 44.8621 39.8933 44.7687 39.8C44.6754 39.7067 44.6287 39.5933 44.6287 39.46C44.6287 39.3267 44.6754 39.2133 44.7687 39.12C44.8621 39.0267 44.9754 38.98 45.1087 38.98C45.2421 38.98 45.3554 39.0267 45.4487 39.12C45.5421 39.2133 45.5887 39.3267 45.5887 39.46C45.5887 39.5933 45.5421 39.7067 45.4487 39.8ZM44.7787 46V41H45.4387V46H44.7787ZM50.6213 45.37C50.1146 45.87 49.4946 46.12 48.7613 46.12C48.0279 46.12 47.4046 45.87 46.8913 45.37C46.3846 44.8633 46.1313 44.24 46.1313 43.5C46.1313 42.76 46.3846 42.14 46.8913 41.64C47.4046 41.1333 48.0279 40.88 48.7613 40.88C49.4946 40.88 50.1146 41.1333 50.6213 41.64C51.1346 42.14 51.3913 42.76 51.3913 43.5C51.3913 44.24 51.1346 44.8633 50.6213 45.37ZM47.3613 44.91C47.7413 45.29 48.2079 45.48 48.7613 45.48C49.3146 45.48 49.7813 45.29 50.1613 44.91C50.5413 44.5233 50.7313 44.0533 50.7313 43.5C50.7313 42.9467 50.5413 42.48 50.1613 42.1C49.7813 41.7133 49.3146 41.52 48.7613 41.52C48.2079 41.52 47.7413 41.7133 47.3613 42.1C46.9813 42.48 46.7913 42.9467 46.7913 43.5C46.7913 44.0533 46.9813 44.5233 47.3613 44.91ZM54.4277 40.88C55.0344 40.88 55.5111 41.0667 55.8577 41.44C56.2111 41.8067 56.3877 42.3033 56.3877 42.93V46H55.7277V42.93C55.7277 42.4833 55.6077 42.1367 55.3677 41.89C55.1344 41.6433 54.8011 41.52 54.3677 41.52C53.8877 41.52 53.4977 41.6733 53.1977 41.98C52.8977 42.28 52.7477 42.7467 52.7477 43.38V46H52.0877V41H52.7477V41.78C53.1211 41.18 53.6811 40.88 54.4277 40.88Z"
            fill="white"
          />
        </g>
      </svg>
    </StyledIconBtn>
  );
}

export default NotificationsIcon;
