function MobileCreateIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="25"
        transform="matrix(-1 0 0 1 25 25)"
        fill="url(#paint0_linear_600_2500)"
      />
      <path
        d="M25 33V25M25 25V17M25 25H17M25 25H33"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_600_2500"
          x1="0"
          y1="0"
          x2="50"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDD819" />
          <stop offset="1" stopColor="#E80505" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default MobileCreateIcon;