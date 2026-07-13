type PageCardProps = {
  children: React.ReactNode;
};

export const PageCard = ({ children }: PageCardProps) => {
  return (
    <div className="flex-1 overflow-hidden rounded-t-xl bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)]">
      {children}
    </div>
  );
};
