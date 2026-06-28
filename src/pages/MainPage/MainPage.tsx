import PersonAvatar from "../../assets/PersonAvatar.png";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="flex-1 shadow-[0_3px_8px_rgba(0,0,0,0.15)] rounded-t-xl">
      <div className="flex items-center gap-3 px-9 pt-9 pb-4.5">
        <img src={PersonAvatar} alt="Pesron avatar" />
        <div className="flex flex-col gap-1">
          <p className="font-poppins text-base] font-semibold w-md text-[#171725]">
            James Brown
          </p>
          <p className="font-manrope text-xs text-[#92929D] w-10.25">Patient</p>
        </div>
      </div>
      <div className="flex w-full border-b border-b-[#44444F1A] px-9 gap-2">
        <div className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer active-tab">
          <p>Summary</p>
        </div>
        <div className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          <p>Care plan</p>
        </div>
        <div className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          <p>Lab results</p>
        </div>
        <div className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          <p>PGHD</p>
        </div>
        <div className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          <p>Prescribtions</p>
        </div>
      </div>
    </div>
  );
};
