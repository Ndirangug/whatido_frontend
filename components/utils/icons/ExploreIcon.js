import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StyledIconBtn } from '../../../styles/utils.styles';

function ExploreIcon() {
  const [selectedRoute, setSelectedRoute] = useState(false);
  const router = useRouter();
  let color = selectedRoute ? '#ffffff' : '#808080';

  useEffect(() => {
    router.asPath.includes('/explore')
      ? setSelectedRoute(true)
      : setSelectedRoute(false);
  }, [router.asPath]);

  return (
    <StyledIconBtn
      selected={selectedRoute}
      onClick={() => router.push('/explore')}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M25.9998 19.0833C25.4915 19.0833 25.0832 19.4916 25.0832 20C25.0832 20.5083 25.4915 20.9166 25.9998 20.9166C26.5082 20.9166 26.9165 20.5083 26.9165 20C26.9165 19.4916 26.5082 19.0833 25.9998 19.0833ZM25.9998 11.6666C21.3998 11.6666 17.6665 15.4 17.6665 20C17.6665 24.6 21.3998 28.3333 25.9998 28.3333C30.5998 28.3333 34.3332 24.6 34.3332 20C34.3332 15.4 30.5998 11.6666 25.9998 11.6666ZM27.8248 21.825L20.9998 25L24.1748 18.175L30.9998 15L27.8248 21.825Z"
            fill={color}
          />
          <path
            d="M11.9418 43.34H15.3418V44H11.2418V37H15.2918V37.66H11.9418V40.14H15.0418V40.8H11.9418V43.34ZM20.2365 44H19.4465L17.8865 41.94L16.3265 44H15.5365L17.4965 41.41L15.6665 39H16.4565L17.8865 40.89L19.3165 39H20.1065L18.2865 41.41L20.2365 44ZM23.4062 38.88C24.1195 38.88 24.7262 39.1333 25.2262 39.64C25.7328 40.1467 25.9862 40.7667 25.9862 41.5C25.9862 42.2333 25.7328 42.8533 25.2262 43.36C24.7262 43.8667 24.1195 44.12 23.4062 44.12C22.5195 44.12 21.8462 43.7533 21.3862 43.02V46H20.7262V39H21.3862V39.98C21.8462 39.2467 22.5195 38.88 23.4062 38.88ZM21.9562 42.91C22.3362 43.29 22.8028 43.48 23.3562 43.48C23.9095 43.48 24.3762 43.29 24.7562 42.91C25.1362 42.5233 25.3262 42.0533 25.3262 41.5C25.3262 40.9467 25.1362 40.48 24.7562 40.1C24.3762 39.7133 23.9095 39.52 23.3562 39.52C22.8028 39.52 22.3362 39.7133 21.9562 40.1C21.5762 40.48 21.3862 40.9467 21.3862 41.5C21.3862 42.0533 21.5762 42.5233 21.9562 42.91ZM26.6756 44V36.7H27.3356V44H26.6756ZM32.5181 43.37C32.0115 43.87 31.3915 44.12 30.6581 44.12C29.9248 44.12 29.3015 43.87 28.7881 43.37C28.2815 42.8633 28.0281 42.24 28.0281 41.5C28.0281 40.76 28.2815 40.14 28.7881 39.64C29.3015 39.1333 29.9248 38.88 30.6581 38.88C31.3915 38.88 32.0115 39.1333 32.5181 39.64C33.0315 40.14 33.2881 40.76 33.2881 41.5C33.2881 42.24 33.0315 42.8633 32.5181 43.37ZM29.2581 42.91C29.6381 43.29 30.1048 43.48 30.6581 43.48C31.2115 43.48 31.6781 43.29 32.0581 42.91C32.4381 42.5233 32.6281 42.0533 32.6281 41.5C32.6281 40.9467 32.4381 40.48 32.0581 40.1C31.6781 39.7133 31.2115 39.52 30.6581 39.52C30.1048 39.52 29.6381 39.7133 29.2581 40.1C28.8781 40.48 28.6881 40.9467 28.6881 41.5C28.6881 42.0533 28.8781 42.5233 29.2581 42.91ZM34.6446 39.83C34.9513 39.2233 35.4779 38.92 36.2246 38.92V39.56C35.7713 39.56 35.3946 39.6933 35.0946 39.96C34.7946 40.2267 34.6446 40.6467 34.6446 41.22V44H33.9846V39H34.6446V39.83ZM38.7284 38.88C39.4684 38.88 40.0651 39.1433 40.5184 39.67C40.9784 40.19 41.2084 40.8067 41.2084 41.52C41.2084 41.5933 41.2017 41.6967 41.1884 41.83H36.7984C36.8651 42.3367 37.0784 42.74 37.4384 43.04C37.8051 43.3333 38.2551 43.48 38.7884 43.48C39.1684 43.48 39.4951 43.4033 39.7684 43.25C40.0484 43.09 40.2584 42.8833 40.3984 42.63L40.9784 42.97C40.7584 43.3233 40.4584 43.6033 40.0784 43.81C39.6984 44.0167 39.2651 44.12 38.7784 44.12C37.9917 44.12 37.3517 43.8733 36.8584 43.38C36.3651 42.8867 36.1184 42.26 36.1184 41.5C36.1184 40.7533 36.3617 40.13 36.8484 39.63C37.3351 39.13 37.9617 38.88 38.7284 38.88ZM38.7284 39.52C38.2084 39.52 37.7717 39.6767 37.4184 39.99C37.0717 40.2967 36.8651 40.6967 36.7984 41.19H40.5284C40.4617 40.6633 40.2584 40.2533 39.9184 39.96C39.5784 39.6667 39.1817 39.52 38.7284 39.52Z"
            fill={color}
          />
        </g>
      </svg>
    </StyledIconBtn>
  );
}

export default ExploreIcon;
