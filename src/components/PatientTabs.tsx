const patientTabsNames = [
  "Summary",
  "Care plan",
  "Lab results",
  "PGHD",
  "Prescriptions",
];

type PatientTabsProps = {
  activeTab: string;
};

export const PatientTabs = ({ activeTab }: PatientTabsProps) => {
  return (
    <div className="flex w-full gap-2 overflow-x-auto overflow-y-hidden border-b border-b-[#44444F1A] px-5 sm:px-7 lg:px-9">
      {patientTabsNames.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            className={`${isActive ? "active-tab" : ""} relative flex h-13 shrink-0 cursor-pointer items-center justify-center px-5 font-poppins text-sm text-[#92929D] sm:h-15 sm:px-6`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
