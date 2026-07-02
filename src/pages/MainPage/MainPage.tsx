import PersonAvatar from "../../assets/PersonAvatar.png";
import { AddBtnGreen } from "../../assets/svgs/AddBtnGreen";
import { CalendarIcon } from "../../assets/svgs/CalendarIcon";
import { EditBtnGray } from "../../assets/svgs/EditBtnGray";
import { EditBtnGreen } from "../../assets/svgs/EditBtnGreen";
import { IncomingCallIcon } from "../../assets/svgs/IncomingCallIcon";
import { LinkIcon } from "../../assets/svgs/LinkIcon";
import { OutgoingCallIcon } from "../../assets/svgs/OutGoingCallIcon";
import { PersonIcon } from "../../assets/svgs/PersonIcon";
import { SMSIcon } from "../../assets/svgs/SMSIcon";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="flex-1 shadow-[0_3px_8px_rgba(0,0,0,0.15)] rounded-t-xl">
      <div className="flex items-center gap-3 px-9 pt-9 pb-4.5">
        <img src={PersonAvatar} alt="Pesron avatar" />
        <div className="flex flex-col gap-1">
          <p className="font-poppins text-base font-semibold w-md text-[#171725]">
            James Brown
          </p>
          <p className="font-manrope text-xs text-[#92929D] w-10.25">Patient</p>
        </div>
      </div>
      <div className="flex w-full border-b border-b-[#44444F1A] px-9 gap-2">
        <button className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer active-tab">
          Summary
        </button>
        <button className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          Care plan
        </button>
        <button className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          Lab results
        </button>
        <button className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          PGHD
        </button>
        <button className="flex items-center justify-center w-36.25 h-15 font-poppins text-sm text-[#92929D] cursor-pointer">
          Prescribtions
        </button>
      </div>

      <div className="flex justify-between p-9 gap-4">
        <div className="flex flex-col flex-1 gap-4">
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
                <p className="text-[#B5B5BE] text-xs">Gender</p>
                <p className="text-[#44444F] text-sm">Male</p>
              </div>
              <div>
                <p className="text-[#B5B5BE] text-xs">Birth (Age)</p>
                <p className="text-[#44444F] text-sm">07/03/1987 (36)</p>
              </div>
              <div>
                <p className="text-[#B5B5BE] text-xs">Patient ID</p>
                <p className="text-[#44444F] text-sm">9790</p>
              </div>
              <div>
                <p className="text-[#B5B5BE] text-xs">Nationality</p>
                <p className="text-[#44444F] text-sm">Germany</p>
              </div>
              <div>
                <p className="text-[#B5B5BE] text-xs">Material status</p>
                <p className="text-[#44444F] text-sm">Not married</p>
              </div>
              <div>
                <p className="text-[#B5B5BE] text-xs">Emergency contact</p>
                <p className="text-[#44444F] text-sm">23546787690</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-1 flex-col border border-[#ECECED] rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <p className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Activities
              </p>
              <button className="flex items-center justify-center w-9 h-9 border border-[#ECECED] rounded-xl cursor-pointer">
                <AddBtnGreen />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-4 font-roboto relative">
              <input
                type="text"
                name="post-input"
                placeholder="Type a post..."
                className="text-[12px] py-2.25 px-1 border-b border-b-[#44444F1A]"
              />
              <LinkIcon classNameProp="absolute right-[27px] top-[24px]" />
              <div className="flex items-center justify-between border-b border-[#ECECED]">
                <button className="flex flex-1 items-center justify-center px-5 pb-2.5 text-sm font-poppins text-[#92929D] cursor-pointer active-subtab">
                  Time line
                </button>
                <button className="flex flex-1 items-center justify-center px-5 pb-2.5 text-sm font-poppins text-[#92929D] cursor-pointer">
                  Tasks
                </button>
                <button className="flex flex-1 items-center justify-center px-5 pb-2.5 text-sm font-poppins text-[#92929D] cursor-pointer">
                  Notes
                </button>
              </div>
              <div className="flex flex-col gap-8.25">
                <div className="flex flex-1 items-end justify-between pl-2">
                  <div className="flex items-center gap-5">
                    <SMSIcon />
                    <div>
                      <p className="font-poppins font-medium text-sm text-[#242424]">
                        Screening test
                      </p>
                      <p className="font-roboto text-xs text-[#818181]">
                        Sent by{" "}
                        <span className="text-[#2BB567]">marketing</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-xs text-[#818181]">
                    21-04-2021
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between pl-2">
                  <div className="flex items-center gap-5">
                    <CalendarIcon />
                    <div>
                      <p className="font-poppins font-medium text-sm text-[#242424]">
                        Appointment: Approved
                      </p>
                      <p className="font-roboto text-xs text-[#818181]">
                        by <span className="text-[#2BB567]">CRMadmin</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-xs text-[#818181]">
                    20-04-2021
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between pl-2">
                  <div className="flex items-center gap-5">
                    <OutgoingCallIcon />
                    <div>
                      <p className="font-poppins font-medium text-sm text-[#242424]">
                        Outcoming call: Doctor visit
                      </p>
                      <p className="font-roboto text-xs text-[#818181]">
                        by <span className="text-[#2BB567]">CRMadmin</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-xs text-[#818181]">
                    18-04-2021
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between pl-2">
                  <div className="flex items-center gap-5">
                    <PersonIcon />
                    <div>
                      <p className="font-poppins font-medium text-sm text-[#242424]">
                        Patient: Profile created
                      </p>
                      <p className="font-roboto text-xs text-[#818181]">
                        by <span className="text-[#2BB567]">CRMadmin</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-xs text-[#818181]">
                    17-04-2021
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between pl-2">
                  <div className="flex items-center gap-5">
                    <IncomingCallIcon />
                    <div>
                      <p className="font-poppins font-medium text-sm text-[#242424]">
                        Billing confirmed
                      </p>
                      <p className="font-roboto text-xs text-[#818181]">
                        by <span className="text-[#2BB567]">James Brown</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-xs text-[#818181]">
                    16-04-2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col border border-[#ECECED] rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <p className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Insurance Info
              </p>
              <button className="flex items-center justify-center w-9 h-9 border border-[#ECECED] rounded-xl cursor-pointer">
                <EditBtnGray />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-4 font-roboto">
              <div>
                <p className="text-[#B5B5BE] text-xs">Member ID</p>
                <p className="text-[#44444F] text-sm">54223467897</p>
              </div>
              <div>
                <p className="text-[#B5B5BE] text-xs">Insurance Provider</p>
                <p className="text-[#44444F] text-sm">Green cross shield</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
