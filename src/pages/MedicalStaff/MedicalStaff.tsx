import { SettingsIcon } from "../../assets/svgs/SettingIcon";
import DocPhoto from "../../assets/DocPhoto.png";
import { PageCard } from "../../components/PageCard";
import { MedicalStaffRow } from "../../components/MedicalStaffRow";

type MedicalStaffMember = {
  id: number;
  name: string;
  clinic: string;
  position: string;
  cityCountry: string;
  availableHours: string;
  status: string;
  photo: string;
};

const medicalStaff: MedicalStaffMember[] = [
  {
    id: 1,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 2,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 3,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 4,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 5,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 6,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 7,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 8,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 9,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
  {
    id: 10,
    name: "Raynald Schmidt",
    clinic: "Harmony Health",
    position: "Therapist",
    cityCountry: "Berlin, Germany",
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: DocPhoto,
  },
];

export const MedicalStaff = () => {
  return (
    <PageCard>
      <div className="flex items-center justify-between p-10">
        <h1 className="font-poppins font-semibold text-2xl text-[#171725]">
          Medical Staff
        </h1>
        <button
          type="button"
          aria-label="Filter"
          className="flex gap-2.5 items-center border border-[#ECECED] py-2 px-3.5 rounded-3xl"
        >
          <SettingsIcon />
          Filter
        </button>
      </div>
      <div className="px-10 pb-10">
        <div className="overflow-x-auto">
          <div className="min-w-272">
            <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border border-[#ECECED] rounded-t-xl px-5 py-5 font-poppins font-medium text-sm text-[#92929D]">
              <p>Name</p>
              <p>City/Country</p>
              <p>Available hours</p>
              <p>Schedule an appointment</p>
              <p>Confirmation</p>
            </div>
            {medicalStaff.map((staff) => {
              return (
                <MedicalStaffRow
                  key={staff.id}
                  availableHours={staff.availableHours}
                  cityCountry={staff.cityCountry}
                  clinic={staff.clinic}
                  name={staff.name}
                  photo={staff.photo}
                  position={staff.position}
                  status={staff.status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </PageCard>
  );
};
