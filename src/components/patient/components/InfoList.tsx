import type { InfoItem } from "../types/patient";

type InfoListProps = {
  items: InfoItem[];
};

export const InfoList = ({ items }: InfoListProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 font-roboto">
      {items.map((info) => (
        <div key={info.label}>
          <p className="text-xs text-[#70707A]">{info.label}</p>
          <p className="text-sm text-[#44444F]">{info.value}</p>
        </div>
      ))}
    </div>
  );
};
