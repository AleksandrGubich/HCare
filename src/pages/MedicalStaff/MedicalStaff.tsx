import { SettingsIcon } from "../../assets/svgs/SettingIcon";
import { PageCard } from "../../components/common/PageCard";
import { MedicalStaffRow } from "../../components/medical-staff/components/MedicalStaffRow";
import { useMedicalStaff } from "../../components/medical-staff/hooks/useMedicalStaff";

export const MedicalStaff = () => {
  const { data: medicalStaff = [], isLoading, isError } = useMedicalStaff();

  if (isLoading) {
    return (
      <PageCard>
        <div className="p-10 font-poppins text-xl font-semibold text-[#171725]">
          Loading medical staff...
        </div>
      </PageCard>
    );
  }

  if (isError) {
    return (
      <PageCard>
        <div className="p-10 font-poppins text-xl font-semibold text-red-500">
          Failed to load medical staff
        </div>
      </PageCard>
    );
  }

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
            <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border border-[#ECECED] rounded-t-xl px-5 py-5 font-poppins font-medium text-sm text-[#5F5F6B]">
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
