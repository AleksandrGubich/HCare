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
import { ActivityTabs } from "../../components/ActivityTabs";
import { IconButton } from "../../components/IconButton";
import { InfoList } from "../../components/InfoList";
import { PageCard } from "../../components/PageCard";
import { PatientTabs } from "../../components/PatientTabs";
import { SectionCard } from "../../components/SectionCard";
import "./MainPage.css";

const contactInfo = [
  { label: "Full Name", value: "James Brown" },
  { label: "Phone", value: "07086459584" },
  { label: "Home Phone", value: "-" },
  { label: "Address", value: "MBS Residence number 28C." },
  { label: "Email", value: "jamesbrown@gmail.com" },
];

const personalInfo = [
  { label: "Gender", value: "Male" },
  { label: "Birth (Age)", value: "07/03/1987 (36)" },
  { label: "Patient ID", value: "9790" },
  { label: "Nationality", value: "Germany" },
  { label: "Material status", value: "Not married" },
  { label: "Emergency contact", value: "23546787690" },
];

const insuranseInfo = [
  { label: "Member ID", value: "54223467897" },
  { label: "Insurance Provider", value: "Green cross shield" },
];

export const MainPage = () => {
  return (
    <PageCard>
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
      <PatientTabs activeTab="Summary" />

      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:p-7 xl:grid-cols-3 xl:p-9">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionCard
            title="Contact info"
            actionBtn={
              <IconButton ariaLabel="Edit contact info">
                <EditBtnGreen />
              </IconButton>
            }
          >
            <InfoList items={contactInfo} />
          </SectionCard>
          <SectionCard title="Personal">
            <InfoList items={personalInfo} />
          </SectionCard>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <SectionCard
            title="Activities"
            actionBtn={
              <IconButton ariaLabel="Add activity">
                <AddBtnGreen />
              </IconButton>
            }
          >
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
              <ActivityTabs activeTab="Time line" />
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
          </SectionCard>
          <SectionCard
            title="Insurance Info"
            actionBtn={
              <IconButton ariaLabel="Edit insurance info">
                <EditBtnGray />
              </IconButton>
            }
          >
            <InfoList items={insuranseInfo} />
          </SectionCard>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <SectionCard
            title="Appointments"
            actionBtn={
              <IconButton ariaLabel="Add appointments">
                <AddBtnGreen />
              </IconButton>
            }
          >
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
          </SectionCard>
          <SectionCard
            title="Surveys"
            actionBtn={
              <IconButton ariaLabel="Add survey">
                <AddBtnGreen />
              </IconButton>
            }
          >
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
          </SectionCard>
          <SectionCard
            title="Feedback"
            actionBtn={
              <IconButton ariaLabel="Add feedback">
                <AddBtnGreen />
              </IconButton>
            }
          >
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
          </SectionCard>
          <SectionCard title="Contact preferences">
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
          </SectionCard>
        </div>
      </div>
    </PageCard>
  );
};
