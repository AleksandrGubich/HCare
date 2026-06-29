import PersonAvatar from "../../assets/PersonAvatar.png";
import { EditBtnGreen } from "../../assets/svgs/EditBtnGreen";
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
      <div className="flex flex-col p-9 gap-4">
        <div className="flex flex-1 flex-col border border-[#ECECED] rounded-xl">
          <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
            <p className="flex items-center font-poppins text-[#171725] font-semibold h-9">
              Contact info
            </p>
            <button className="flex items-center justify-center w-9 h-9 border border-[#ECECED] rounded-xl cursor-pointer">
              <EditBtnGreen />
            </button>
          </div>
          <div className="flex flex-col p-4 gap-4 font-roboto">
            <div>
              <p className="text-[#B5B5BE] text-xs">Full Name</p>
              <p className="text-[#44444F] text-sm">James Brown</p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Phone</p>
              <p className="text-[#44444F] text-sm">07086459584</p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Home Phone</p>
              <p className="text-[#44444F] text-sm">-</p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Address</p>
              <p className="text-[#44444F] text-sm">
                MBS Residence number 28C.
              </p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Email</p>
              <p className="text-[#2CB367] text-sm">jamesbrown@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col border border-[#ECECED] rounded-xl">
          <div className="flex items-center p-4 border-b border-[#ECECED]">
            <p className="flex items-center font-poppins text-[#171725] font-semibold h-9">
              Personal
            </p>
          </div>
          <div className="flex flex-col p-4 gap-4 font-roboto">
            <div>
              <p className="text-[#B5B5BE] text-xs">Full Name</p>
              <p className="text-[#44444F] text-sm">James Brown</p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Phone</p>
              <p className="text-[#44444F] text-sm">07086459584</p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Home Phone</p>
              <p className="text-[#44444F] text-sm">-</p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Address</p>
              <p className="text-[#44444F] text-sm">
                MBS Residence number 28C,{" "}
              </p>
            </div>
            <div>
              <p className="text-[#B5B5BE] text-xs">Email</p>
              <p className="text-[#2CB367] text-sm">jamesbrown@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
};
