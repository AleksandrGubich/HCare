type SectionCardProps = {
  title: string;
  children: React.ReactNode;
  actionBtn?: React.ReactNode;
};

export const SectionCard = ({
  title,
  children,
  actionBtn,
}: SectionCardProps) => {
  return (
    <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
      <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
        <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
          {title}
        </h2>
        {actionBtn}
      </div>
      {children}
    </div>
  );
};
