import { StarIcon } from "../../../assets/svgs/StarIcon";

export const FeedbackTable = () => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <div className="min-w-120">
        <div className="grid grid-cols-3 border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#5F5F6B]">
          <div className="px-4.75 pt-2.5 pb-2.75">Case Title</div>
          <div className="border-l border-[#ECECED] px-4.75 pt-2.5 pb-2.75">
            Date
          </div>
          <div className="border-l border-[#ECECED] px-4.75 pt-2.5 pb-2.75">
            Status
          </div>
        </div>
        <div className="grid grid-cols-3 py-4 font-roboto text-xs text-[#303030]">
          <div className="px-4.75">Dr.Johnes</div>
          <div className="px-4.75">15-12-2021</div>
          <div className="flex px-4.75">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
