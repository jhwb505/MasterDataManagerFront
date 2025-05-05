const MDMLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    width={24}
    height={24}
    color="#000000"
    {...props}
  >
    <g
      id="diagram_conncection"
      data-name="diagram conncection"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit={10}
    >
      <rect x="1.5" y="9.14" width="5.73" height="5.73" rx="2.86" />
      <rect x="18.68" y="1.5" width="3.82" height="3.82" />
      <rect x="18.68" y="10.09" width="3.82" height="3.82" />
      <rect x="18.68" y="18.68" width="3.82" height="3.82" />
      <polyline points="18.68 20.59 12.96 20.59 12.96 3.41 18.68 3.41" />
      <line x1="18.68" y1="12" x2="7.23" y2="12" />
    </g>
  </svg>
  )
}

export default MDMLogo