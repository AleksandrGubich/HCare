type ActivityItemProps = {
  icon: React.ReactNode;
  title: string;
  authorPrefix: string;
  author: string;
  date: string;
};

export const ActivityItem = ({
  icon,
  title,
  authorPrefix,
  author,
  date,
}: ActivityItemProps) => {
  return (
    <div className="flex flex-col gap-2 pl-2 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-5">
        {icon}
        <div>
          <p className="font-poppins font-medium text-sm text-[#242424]">
            {title}
          </p>
          <p className="font-roboto text-xs text-[#818181]">
            {authorPrefix} <span className="text-[#2BB567]">{author}</span>
          </p>
        </div>
      </div>
      <p className="font-roboto text-xs text-[#818181]">{date}</p>
    </div>
  );
};
