import { AddBtnGreen } from "../../assets/svgs/AddBtnGreen";
import { CalendarIcon } from "../../assets/svgs/CalendarIcon";
import { EditBtnGray } from "../../assets/svgs/EditBtnGray";
import { EditBtnGreen } from "../../assets/svgs/EditBtnGreen";
import { IncomingCallIcon } from "../../assets/svgs/IncomingCallIcon";
import { LinkIcon } from "../../assets/svgs/LinkIcon";
import { OutgoingCallIcon } from "../../assets/svgs/OutgoingCallIcon";
import { PersonIcon } from "../../assets/svgs/PersonIcon";
import { SMSIcon } from "../../assets/svgs/SMSIcon";
import { ActivityItem } from "../../components/ActivityItem";
import { ActivityTabs } from "../../components/ActivityTabs";
import { AppointmentsTable } from "../../components/AppointmentsTable";
import { ContactMethod } from "../../components/ContactMethod";
import { FeedbackTable } from "../../components/FeedbackTable";
import { IconButton } from "../../components/IconButton";
import { InfoList } from "../../components/InfoList";
import { PageCard } from "../../components/PageCard";
import { PatientTabs } from "../../components/PatientTabs";
import { SectionCard } from "../../components/SectionCard";
import { SurveysTable } from "../../components/SurveysTable";
import { usePatient } from "../../hooks/usePatient";
import "./MainPage.css";

const insuranceInfo = [
  { label: "Member ID", value: "54223467897" },
  { label: "Insurance Provider", value: "Green cross shield" },
];

export const MainPage = () => {
  const { data: patient, isLoading, isError } = usePatient();

  if (isLoading) {
    return (
      <PageCard>
        <div className="p-10 font-poppins text-xl font-semibold text-[#171725]">
          Loading patient...
        </div>
      </PageCard>
    );
  }

  if (isError || !patient) {
    return (
      <PageCard>
        <div className="p-10 font-poppins text-xl font-semibold text-red-500">
          Failed to load patient
        </div>
      </PageCard>
    );
  }

  return (
    <PageCard>
      <div className="flex items-center gap-3 px-5 pt-5 pb-4 sm:px-7 lg:px-9 lg:pt-9 lg:pb-4.5">
        <img
          src={patient.photo}
          alt={patient.fullName}
          className="h-12 w-12 rounded-full sm:h-auto sm:w-auto"
        />
        <div className="flex min-w-0 flex-col gap-1">
          <h1 className="truncate font-poppins text-base font-semibold text-[#171725]">
            {patient.fullName}
          </h1>
          <p className="font-manrope text-xs text-[#5F5F6B]">Patient</p>
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
            <InfoList items={patient.contactInfo} />
          </SectionCard>
          <SectionCard title="Personal">
            <InfoList items={patient.personalInfo} />
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
                <ActivityItem
                  icon={<SMSIcon />}
                  title="Screening test"
                  authorPrefix="Sent by"
                  author="marketing"
                  date="21-04-2021"
                />
                <ActivityItem
                  icon={<CalendarIcon />}
                  title="Appointment: Approved"
                  authorPrefix="by"
                  author="CRMadmin"
                  date="20-04-2021"
                />
                <ActivityItem
                  icon={<OutgoingCallIcon />}
                  title="Outcoming call: Doctor visit"
                  authorPrefix="by"
                  author="CRMadmin"
                  date="18-04-2021"
                />
                <ActivityItem
                  icon={<PersonIcon />}
                  title="Patient: Profile created"
                  authorPrefix="by"
                  author="CRMadmin"
                  date="17-04-2021"
                />
                <ActivityItem
                  icon={<IncomingCallIcon />}
                  title="Billing confirmed"
                  authorPrefix="by"
                  author="James Brown"
                  date="16-04-2021"
                />
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
            <InfoList items={insuranceInfo} />
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
            <AppointmentsTable />
          </SectionCard>
          <SectionCard
            title="Surveys"
            actionBtn={
              <IconButton ariaLabel="Add survey">
                <AddBtnGreen />
              </IconButton>
            }
          >
            <SurveysTable />
          </SectionCard>
          <SectionCard
            title="Feedback"
            actionBtn={
              <IconButton ariaLabel="Add feedback">
                <AddBtnGreen />
              </IconButton>
            }
          >
            <FeedbackTable />
          </SectionCard>
          <SectionCard title="Contact preferences">
            <div className="flex border-b border-[#ECECED] bg-[#F8F8F8] font-roboto text-xs text-[#5F5F6B]">
              <div className="flex-1 px-4.75 pt-2.5 pb-2.75">
                Contact Method
              </div>
            </div>
            <div className="font-roboto text-sm text-[#303030] py-2">
              <ContactMethod label="Email" enabled={false} />
              <ContactMethod label="Mobile Phone" enabled={false} />
              <ContactMethod label="Mail" enabled={false} />
            </div>
          </SectionCard>
        </div>
      </div>
    </PageCard>
  );
};
