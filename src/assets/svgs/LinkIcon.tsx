type LinkIconProps = {
  className?: string;
};

export const LinkIcon = ({ className }: LinkIconProps) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.86125 10.5C2.14346 9.6409 1.75016 8.557 1.75 7.4375C1.75 4.795 3.91125 2.625 6.5625 2.625H10.9375C13.58 2.625 15.75 4.795 15.75 7.4375C15.75 10.08 13.5887 12.25 10.9375 12.25H8.75"
      stroke="#5F5F6B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.1387 10.5C18.8565 11.3591 19.2498 12.443 19.25 13.5625C19.25 16.205 17.0887 18.375 14.4375 18.375H10.0625C7.42 18.375 5.25 16.205 5.25 13.5625C5.25 10.92 7.41125 8.75 10.0625 8.75H12.25"
      stroke="#5F5F6B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
