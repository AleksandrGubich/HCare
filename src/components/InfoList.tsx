type InfoItem = {
  label: string;
  value: string;
};

type InfoListProps = {
  items: InfoItem[];
};

export const InfoList = ({ items }: InfoListProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 font-roboto">
      {items.map((info) => (
        <div key={info.label}>
          <p className="text-xs text-[#B5B5BE]">{info.label}</p>
          <p className="text-sm text-[#44444F]">{info.value}</p>
        </div>
      ))}
    </div>
  );
};
