import { AddDateBtn } from "../assets/svgs/AddDateBtn";

type MedicalStaffRowProps = {
  name: string;
  clinic: string;
  position: string;
  cityCountry: string;
  availableHours: string;
  status: string;
  photo: string;
};

export const MedicalStaffRow = ({
  name,
  clinic,
  position,
  cityCountry,
  availableHours,
  status,
  photo,
}: MedicalStaffRowProps) => {
  return (
    <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border-x border-b border-[#ECECED] px-5 py-4 font-roboto items-center text-sm text-[#171725]">
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={photo}
          alt={name}
          className="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate font-poppins font-medium text-sm text-[#242424]">
            {name}
          </p>
          <p className="font-roboto text-xs text-[#818181]">{clinic}</p>
          <p className="font-roboto text-xs text-[#818181]">{position}</p>
        </div>
      </div>
      <p className="font-poppins font-medium text-sm text-[#242424]">
        {cityCountry}
      </p>
      <p className="font-poppins font-medium text-sm text-[#242424]">
        {availableHours}
      </p>
      <button className="flex items-center gap-3 font-poppins font-medium text-sm text-[#2BB567]">
        <AddDateBtn />
        Book date
      </button>
      <p className="font-poppins font-medium text-sm text-[#242424]">
        {status}
      </p>
    </div>
  );
};
