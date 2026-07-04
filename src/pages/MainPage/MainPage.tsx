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
    <div className="flex-1 overflow-hidden rounded-t-xl bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-3 px-5 pt-5 pb-4 sm:px-7 lg:px-9 lg:pt-9 lg:pb-4.5">
        <img
          src={PersonAvatar}
          alt="Person avatar"
          className="h-12 w-12 rounded-full sm:h-auto sm:w-auto"
        />
        <div className="flex min-w-0 flex-col gap-1">
          <h1 className="truncate font-poppins text-base font-semibold text-[#171725]">
            James Brown
          </h1>
          <p className="font-manrope text-xs text-[#92929D]">Patient</p>
        </div>
      </div>
      <div className="flex w-full gap-2 overflow-x-auto overflow-y-hidden border-b border-b-[#44444F1A] px-5 sm:px-7 lg:px-9">
        <button
          type="button"
          className="active-tab relative flex h-13 shrink-0 cursor-pointer items-center justify-center px-5 font-poppins text-sm text-[#92929D] sm:h-15 sm:px-6"
        >
          Summary
        </button>
        <button
          type="button"
          className="relative flex h-13 shrink-0 cursor-pointer items-center justify-center px-5 font-poppins text-sm text-[#92929D] sm:h-15 sm:px-6"
        >
          Care plan
        </button>
        <button
          type="button"
          className="relative flex h-13 shrink-0 cursor-pointer items-center justify-center px-5 font-poppins text-sm text-[#92929D] sm:h-15 sm:px-6"
        >
          Lab results
        </button>
        <button
          type="button"
          className="relative flex h-13 shrink-0 cursor-pointer items-center justify-center px-5 font-poppins text-sm text-[#92929D] sm:h-15 sm:px-6"
        >
          PGHD
        </button>
        <button
          type="button"
          className="relative flex h-13 shrink-0 cursor-pointer items-center justify-center px-5 font-poppins text-sm text-[#92929D] sm:h-15 sm:px-6"
        >
          Prescriptions
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:p-7 xl:grid-cols-3 xl:p-9">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Contact info
              </h2>
              <button
                type="button"
                aria-label="Edit contact info"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#ECECED]"
              >
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
          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center p-4 border-b border-[#ECECED]">
              <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Personal
              </h2>
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

        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Activities
              </h2>
              <button
                type="button"
                aria-label="Add activity"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#ECECED]"
              >
                <AddBtnGreen />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-4 font-roboto">
              <div className="relative">
                <input
                  type="text"
                  name="post-input"
                  placeholder="Type a post..."
                  className="w-full border-b border-b-[#44444F1A] py-2.25 pr-8 pl-1 text-xs outline-none"
                />

                <LinkIcon className="absolute right-1 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex items-center overflow-x-auto overflow-y-hidden border-b border-[#ECECED]">
                <button
                  type="button"
                  className="active-subtab relative flex min-w-28 flex-1 shrink-0 cursor-pointer items-center justify-center px-5 pb-2.5 font-poppins text-sm text-[#92929D]"
                >
                  Time line
                </button>

                <button
                  type="button"
                  className="relative flex min-w-28 flex-1 shrink-0 cursor-pointer items-center justify-center px-5 pb-2.5 font-poppins text-sm text-[#92929D]"
                >
                  Tasks
                </button>

                <button
                  type="button"
                  className="relative flex min-w-28 flex-1 shrink-0 cursor-pointer items-center justify-center px-5 pb-2.5 font-poppins text-sm text-[#92929D]"
                >
                  Notes
                </button>
              </div>
              <div className="flex flex-col gap-8.25">
                <div className="flex flex-col gap-2 pl-2 sm:flex-row sm:items-end sm:justify-between">
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
                <div className="flex flex-col gap-2 pl-2 sm:flex-row sm:items-end sm:justify-between">
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
                <div className="flex flex-col gap-2 pl-2 sm:flex-row sm:items-end sm:justify-between">
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
                <div className="flex flex-col gap-2 pl-2 sm:flex-row sm:items-end sm:justify-between">
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
                <div className="flex flex-col gap-2 pl-2 sm:flex-row sm:items-end sm:justify-between">
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
          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Insurance Info
              </h2>
              <button
                type="button"
                aria-label="Edit insurance info"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#ECECED]"
              >
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

        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Appointments
              </h2>
              <button
                type="button"
                aria-label="Add appointments"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#ECECED]"
              >
                <AddBtnGreen />
              </button>
            </div>
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
                  <div className="px-4.75 font-medium text-[#FFA41B]">
                    Cancelled
                  </div>
                </div>
                <div className="grid grid-cols-3 py-4 font-roboto text-xs text-[#303030]">
                  <div className="flex flex-col gap-1.5 px-4.75">
                    <span>15-12-2021</span>
                    <span>12:00 AM</span>
                  </div>

                  <div className="px-4.75">Surgeon</div>

                  <div className="px-4.75 font-medium text-[#22C04E]">
                    Confirmed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Surveys
              </h2>
              <button
                type="button"
                aria-label="Add survey"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#ECECED]"
              >
                <AddBtnGreen />
              </button>
            </div>
            <div className="overflow-x-auto overflow-y-hidden">
              <div className="min-w-80">
                <div className="grid grid-cols-2 border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#848485]">
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
          </div>

          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center justify-between p-4 border-b border-[#ECECED]">
              <h2 className="flex items-center font-poppins text-[#171725] font-semibold h-9">
                Feedback
              </h2>
              <button
                type="button"
                aria-label="Add feedback"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#ECECED]"
              >
                <AddBtnGreen />
              </button>
            </div>
            <div className="overflow-x-auto overflow-y-hidden">
              <div className="min-w-120">
                <div className="grid grid-cols-3 border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#848485]">
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
          </div>

          <div className="flex min-w-0 flex-col rounded-xl border border-[#ECECED] bg-white">
            <div className="flex items-center justify-between border-b border-[#ECECED] p-4">
              <h2 className="flex h-9 items-center font-poppins font-semibold text-[#171725]">
                Contact preferences
              </h2>
            </div>
            <div className="flex border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#848485]">
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75">
                Contact Method
              </div>
            </div>
            <div className="font-roboto text-sm text-[#303030] py-2">
              <div className="flex flex-col gap-2 px-4.75 py-2 sm:flex-row sm:items-center sm:justify-between">
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
              <div className="flex flex-col gap-2 px-4.75 py-2 sm:flex-row sm:items-center sm:justify-between">
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
              <div className="flex flex-col gap-2 px-4.75 py-2 sm:flex-row sm:items-center sm:justify-between">
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
