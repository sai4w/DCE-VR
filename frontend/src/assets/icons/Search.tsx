interface SearchProps {
  className: React.SVGProps<SVGSVGElement>["className"];
}

const Search = ({ className }: SearchProps) => {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.6 2.8C6.79512 2.8 2.9 6.56081 2.9 11.2C2.9 15.8392 6.79512 19.6 11.6 19.6C16.4049 19.6 20.3 15.8392 20.3 11.2C20.3 6.56081 16.4049 2.8 11.6 2.8ZM0 11.2C0 5.01441 5.1935 0 11.6 0C18.0065 0 23.2 5.01441 23.2 11.2C23.2 13.7882 22.2907 16.1713 20.7638 18.0679L28.5753 25.61C29.1416 26.1568 29.1416 27.0432 28.5753 27.59C28.009 28.1367 27.091 28.1367 26.5247 27.59L18.7132 20.0478C16.7489 21.5221 14.2806 22.4 11.6 22.4C5.1935 22.4 0 17.3856 0 11.2Z" />
    </svg>
  );
};

export default Search;
