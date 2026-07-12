export const SurveysTable = () => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <div className="min-w-80">
        <div className="grid grid-cols-2 border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#5F5F6B]">
          <div className="px-4.75 pt-2.5 pb-2.75">Title</div>
          <div className="border-l border-[#ECECED] px-4.75 pt-2.5 pb-2.75">
            Completed on
          </div>
        </div>
        <div className="grid grid-cols-2 py-4 font-roboto text-xs text-[#303030]">
          <div className="px-4.75">Radiologist</div>
          <div className="px-4.75">Cancelled</div>
        </div>
      </div>
    </div>
  );
};
