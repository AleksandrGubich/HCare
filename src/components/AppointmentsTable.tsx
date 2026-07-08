export const AppointmentsTable = () => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <div className="min-w-120">
        <div className="grid grid-cols-3 border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#848485]">
          <div className="px-4.75 pt-2.5 pb-2.75">Start Time</div>
          <div className="border-l border-[#ECECED] px-4.75 pt-2.5 pb-2.75">
            Speciality
          </div>
          <div className="border-l border-[#ECECED] px-4.75 pt-2.5 pb-2.75">
            Status
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-[#ECECED] py-4 font-roboto text-xs text-[#303030]">
          <div className="flex flex-col gap-1.5 px-4.75">
            <span>12-12-2021</span>
            <span>9:40 AM</span>
          </div>
          <div className="px-4.75">Radiologist</div>
          <div className="px-4.75 font-medium text-[#FFA41B]">Cancelled</div>
        </div>
        <div className="grid grid-cols-3 py-4 font-roboto text-xs text-[#303030]">
          <div className="flex flex-col gap-1.5 px-4.75">
            <span>15-12-2021</span>
            <span>12:00 AM</span>
          </div>
          <div className="px-4.75">Surgeon</div>
          <div className="px-4.75 font-medium text-[#22C04E]">Confirmed</div>
        </div>
      </div>
    </div>
  );
};
