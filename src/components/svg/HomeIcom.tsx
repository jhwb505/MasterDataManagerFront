const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    width={24}
    height={24}
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
    >
      <polyline points="1 12 12 2.83 23 12" />
      <polyline points="19.33 9.25 19.33 21.17 14.75 21.17 14.75 13.83 9.25 13.83 9.25 21.17 4.67 21.17 4.67 9.25" />
    </g>
  </svg>
);

export default HomeIcon;
