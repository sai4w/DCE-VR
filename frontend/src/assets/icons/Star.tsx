interface StarProps {
  className: React.SVGProps<SVGSVGElement>["className"];
  clipPath?: string;
  onMouseEnter?: React.MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: React.MouseEventHandler<SVGSVGElement>;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const Star = ({
  className,
  clipPath,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: StarProps) => {
  return (
    <svg
      width="55"
      height="53"
      viewBox="0 0 55 53"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      strokeWidth={1}
      stroke="currentColor"
      style={clipPath ? { clipPath } : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <path
        d="M30.9139 4.75305L30.9134 4.75206C30.2006 3.31069 28.7442 2.73573 27.5283 2.73573C26.312 2.73573 24.859 3.31018 24.1416 4.74405L24.1415 4.74403L24.1367 4.75387L18.4622 16.2588L5.76904 18.1031L5.76866 18.1032C4.36146 18.3079 3.16306 19.2911 2.71518 20.6744L2.71422 20.6774C2.27741 22.0341 2.6337 23.5425 3.67827 24.5486L12.8612 33.5018L10.6927 46.1412L10.6911 46.1506C10.4582 47.55 11.0229 48.9943 12.2023 49.8457C13.355 50.6778 14.8939 50.8072 16.1778 50.1231L27.5294 44.1606L38.8748 50.1239C38.876 50.1245 38.8772 50.1252 38.8784 50.1258C38.8785 50.1258 38.8785 50.1258 38.8785 50.1258C39.4539 50.4291 40.0626 50.5574 40.6428 50.5574C41.4199 50.5574 42.1884 50.3211 42.8458 49.8531L42.8569 49.8452L42.8679 49.8371C44.0298 48.9848 44.6016 47.5583 44.3673 46.1506L44.3657 46.1412L42.1972 33.5018L51.3834 24.5454C52.4244 23.5328 52.7731 22.0361 52.3384 20.6824C51.9009 19.3024 50.7005 18.3082 49.2894 18.1031L49.0142 19.9971L49.2894 18.1031L36.5956 16.2587L30.9139 4.75305Z"
        stroke-width="2"
      />
    </svg>
  );
};

export default Star;
