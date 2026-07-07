type IconButtonProps = {
  ariaLabel: string;
  children: React.ReactNode;
};

export const IconButton = ({ ariaLabel, children }: IconButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#ECECED]"
    >
      {children}
    </button>
  );
};
