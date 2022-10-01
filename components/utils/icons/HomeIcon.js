import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const StyledIconBtn = styled(IconButton)`
  border-radius: 0px;
  padding: 0;
  border-top: ${({ selected }) => (selected ? '2px solid #ffffff' : 'none')};
`;

function HomeIcon({ selected }) {
  let color = selected ? '#ffffff' : '#808080';
  return (
    <StyledIconBtn selected={selected}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 46 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M30.3583 16.675L24.9 12.3083C23.8333 11.4583 22.1667 11.45 21.1083 12.3L15.65 16.675C14.8667 17.3 14.3917 18.55 14.5583 19.5333L15.6083 25.8166C15.85 27.225 17.1583 28.3333 18.5833 28.3333H27.4167C28.825 28.3333 30.1583 27.2 30.4 25.8083L31.45 19.525C31.6 18.55 31.125 17.3 30.3583 16.675ZM23.625 25C23.625 25.3416 23.3417 25.625 23 25.625C22.6583 25.625 22.375 25.3416 22.375 25V22.5C22.375 22.1583 22.6583 21.875 23 21.875C23.3417 21.875 23.625 22.1583 23.625 22.5V25Z"
            fill={color}
          />
          <path
            d="M15.3231 37H16.0231V44H15.3231V40.73H11.5231V44H10.8231V37H11.5231V40.07H15.3231V37ZM21.302 43.37C20.7953 43.87 20.1753 44.12 19.442 44.12C18.7087 44.12 18.0853 43.87 17.572 43.37C17.0653 42.8633 16.812 42.24 16.812 41.5C16.812 40.76 17.0653 40.14 17.572 39.64C18.0853 39.1333 18.7087 38.88 19.442 38.88C20.1753 38.88 20.7953 39.1333 21.302 39.64C21.8153 40.14 22.072 40.76 22.072 41.5C22.072 42.24 21.8153 42.8633 21.302 43.37ZM18.042 42.91C18.422 43.29 18.8887 43.48 19.442 43.48C19.9953 43.48 20.462 43.29 20.842 42.91C21.222 42.5233 21.412 42.0533 21.412 41.5C21.412 40.9467 21.222 40.48 20.842 40.1C20.462 39.7133 19.9953 39.52 19.442 39.52C18.8887 39.52 18.422 39.7133 18.042 40.1C17.662 40.48 17.472 40.9467 17.472 41.5C17.472 42.0533 17.662 42.5233 18.042 42.91ZM28.0985 38.88C28.6585 38.88 29.1085 39.06 29.4485 39.42C29.7951 39.78 29.9685 40.2667 29.9685 40.88V44H29.3085V40.88C29.3085 40.4467 29.1951 40.1133 28.9685 39.88C28.7485 39.64 28.4551 39.52 28.0885 39.52C27.6751 39.52 27.3385 39.66 27.0785 39.94C26.8251 40.2133 26.6985 40.6433 26.6985 41.23V44H26.0385V40.88C26.0385 40.44 25.9318 40.1033 25.7185 39.87C25.5118 39.6367 25.2285 39.52 24.8685 39.52C24.4685 39.52 24.1285 39.66 23.8485 39.94C23.5685 40.22 23.4285 40.65 23.4285 41.23V44H22.7685V39H23.4285V39.73C23.7885 39.1633 24.2985 38.88 24.9585 38.88C25.6785 38.88 26.1851 39.1833 26.4785 39.79C26.8385 39.1833 27.3785 38.88 28.0985 38.88ZM33.147 38.88C33.887 38.88 34.4837 39.1433 34.937 39.67C35.397 40.19 35.627 40.8067 35.627 41.52C35.627 41.5933 35.6204 41.6967 35.607 41.83H31.217C31.2837 42.3367 31.497 42.74 31.857 43.04C32.2237 43.3333 32.6737 43.48 33.207 43.48C33.587 43.48 33.9137 43.4033 34.187 43.25C34.467 43.09 34.677 42.8833 34.817 42.63L35.397 42.97C35.177 43.3233 34.877 43.6033 34.497 43.81C34.117 44.0167 33.6837 44.12 33.197 44.12C32.4104 44.12 31.7704 43.8733 31.277 43.38C30.7837 42.8867 30.537 42.26 30.537 41.5C30.537 40.7533 30.7804 40.13 31.267 39.63C31.7537 39.13 32.3804 38.88 33.147 38.88ZM33.147 39.52C32.627 39.52 32.1904 39.6767 31.837 39.99C31.4904 40.2967 31.2837 40.6967 31.217 41.19H34.947C34.8804 40.6633 34.677 40.2533 34.337 39.96C33.997 39.6667 33.6004 39.52 33.147 39.52Z"
            fill={color}
          />
        </g>
      </svg>
    </StyledIconBtn>
  );
}

export default HomeIcon;