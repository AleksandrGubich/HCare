import PersonAvatar from "../../assets/PersonAvatar.png";
import { AddBtnGreen } from "../../assets/svgs/AddBtnGreen";
import { CalendarIcon } from "../../assets/svgs/CalendarIcon";
import { EditBtnGray } from "../../assets/svgs/EditBtnGray";
import { EditBtnGreen } from "../../assets/svgs/EditBtnGreen";
import { IncomingCallIcon } from "../../assets/svgs/IncomingCallIcon";
import { LinkIcon } from "../../assets/svgs/LinkIcon";
import { OutgoingCallIcon } from "../../assets/svgs/OutgoingCallIcon";
import { PersonIcon } from "../../assets/svgs/PersonIcon";
import { SMSIcon } from "../../assets/svgs/SMSIcon";
import { StarIcon } from "../../assets/svgs/StarIcon";
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
          <div className="flex flex-col border border-[#ECECED] rounded-xl">
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

        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-1 flex-col border border-[#ECECED] rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <p className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Appointments
              </p>
              <button className="flex items-center justify-center w-9 h-9 border border-[#ECECED] rounded-xl cursor-pointer">
                <AddBtnGreen />
              </button>
            </div>
            <div className="flex border-b border-[#ECECED] bg-[#F8F8F8] text-xs text-[#848485] font-roboto">
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75">Start Time</div>
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75 border-l border-[#ECECED]">
                Speciality
              </div>
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75 border-l border-[#ECECED]">
                Status
              </div>
            </div>
            <div>
              <div className="flex border-b border-[#ECECED] py-4 text-xs text-[#303030]">
                <div className="flex flex-col flex-1 gap-1.5 px-4.75">
                  <div>12-12-2021</div>
                  <div>9:40 AM</div>
                </div>
                <div className="flex-1 px-4.75">Radiologist</div>
                <div className="flex-1 px-4.75 text-[#FFA41B]">Cancelled</div>
              </div>
            </div>
            <div>
              <div className="flex py-4 text-xs text-[#303030]">
                <div className="flex flex-col flex-1 gap-1.5 px-4.75">
                  <div>15-12-2021</div>
                  <div>12:00 AM</div>
                </div>
                <div className="flex-1 px-4.75">Surgeon</div>
                <div className="flex-1 px-4.75 text-[#22C04E]">Confirmed</div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col border border-[#ECECED] rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <p className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Surveys
              </p>
              <button className="flex items-center justify-center w-9 h-9 border border-[#ECECED] rounded-xl cursor-pointer">
                <AddBtnGreen />
              </button>
            </div>
            <div className="flex border-b border-[#ECECED] bg-[#F8F8F8] text-xs text-[#848485] font-roboto">
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75">Title</div>
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75 border-l border-[#ECECED]">
                Completed on
              </div>
            </div>
            <div>
              <div className="flex py-4 text-xs text-[#303030]">
                <div className="flex-1 px-4.75">Radiologist</div>
                <div className="flex-1 px-4.75">Cancelled</div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col border border-[#ECECED] rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <p className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Feedback
              </p>
              <button className="flex items-center justify-center w-9 h-9 border border-[#ECECED] rounded-xl cursor-pointer">
                <AddBtnGreen />
              </button>
            </div>
            <div className="flex border-b border-[#ECECED] bg-[#F8F8F8] text-xs text-[#848485] font-roboto">
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75">Case Title</div>
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75 border-l border-[#ECECED]">
                Date
              </div>
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75 border-l border-[#ECECED]">
                Status
              </div>
            </div>
            <div>
              <div className="flex border-b border-[#ECECED] py-4 text-xs text-[#303030]">
                <div className="flex-1 px-4.75">Dr.Johnes</div>
                <div className="flex-1 px-4.75">15-12-2021</div>
                <div className="flex flex-1 px-4.75">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col rounded-xl border border-[#ECECED]">
            <div className="flex items-center justify-between border-b border-[#ECECED] p-4">
              <p className="flex h-9 items-center font-poppins font-semibold text-[#171725]">
                Contact preferences
              </p>
            </div>
            <div className="flex border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#848485]">
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75">
                Contact Method
              </div>
            </div>
            <div className="font-roboto text-sm text-[#303030] py-2">
              <div className="flex items-center justify-between px-4.75 py-2">
                <div>Email</div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-[#B5B5BE]">DENY</span>
                  <button
                    type="button"
                    className="relative h-4 w-8.5 rounded-full bg-[#D9D9D9]"
                    aria-label="Email preference disabled"
                  >
                    <span className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#FC1C1C]" />
                  </button>
                  <span className="text-[#2BB567]">ALLOW</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4.75 py-2">
                <div>Mobile Phone</div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-[#B5B5BE]">DENY</span>
                  <button
                    type="button"
                    className="relative h-4 w-8.5 rounded-full bg-[#D9D9D9]"
                    aria-label="Mobile phone preference disabled"
                  >
                    <span className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#FC1C1C]" />
                  </button>
                  <span className="text-[#2BB567]">ALLOW</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4.75 py-2">
                <div>Mail</div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-[#B5B5BE]">DENY</span>
                  <button
                    type="button"
                    className="relative h-4 w-8.5 rounded-full bg-[#D9D9D9]"
                    aria-label="Mail preference disabled"
                  >
                    <span className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#FC1C1C]" />
                  </button>
                  <span className="text-[#2BB567]">ALLOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
