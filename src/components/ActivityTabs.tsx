const activityTabs = ["Time line", "Tasks", "Notes"];

type ActivityTabsProps = {
  activeTab: string;
};

export const ActivityTabs = ({ activeTab }: ActivityTabsProps) => {
  return (
    <div className="flex items-center overflow-x-auto overflow-y-hidden border-b border-[#ECECED]">
      {activityTabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            className={`${isActive ? "active-subtab" : ""} relative flex min-w-28 flex-1 shrink-0 cursor-pointer items-center justify-center px-5 pb-2.5 font-poppins text-sm text-[#92929D]`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
