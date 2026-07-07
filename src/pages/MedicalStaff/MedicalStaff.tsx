import { SettingsIcon } from "../../assets/svgs/SettingIcon";
import DocPhoto from "../../assets/DocPhoto.png";
import { AddDateBtn } from "../../assets/svgs/AddDateBtn";
import { PageCard } from "../../components/PageCard";

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

            <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border-x border-b border-[#ECECED] px-5 py-4 font-roboto items-center text-sm text-[#171725]">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={DocPhoto}
                  alt="Raynald Schmidt"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-poppins font-medium text-sm text-[#242424]">
                    Raynald Schmidt
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Harmony Health
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Therapist
                  </p>
                </div>
              </div>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Berlin, Germany
              </p>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                15:00 - 22:00
              </p>
              <button className="flex items-center gap-3 font-poppins font-medium text-sm text-[#2BB567]">
                <AddDateBtn />
                Book date
              </button>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Confirmed
              </p>
            </div>
            <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border-x border-b border-[#ECECED] px-5 py-4 font-roboto items-center text-sm text-[#171725]">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={DocPhoto}
                  alt="Raynald Schmidt"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-poppins font-medium text-sm text-[#242424]">
                    Raynald Schmidt
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Harmony Health
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Therapist
                  </p>
                </div>
              </div>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Berlin, Germany
              </p>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                15:00 - 22:00
              </p>
              <button className="flex items-center gap-3 font-poppins font-medium text-sm text-[#2BB567]">
                <AddDateBtn />
                Book date
              </button>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Confirmed
              </p>
            </div>
            <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border-x border-b border-[#ECECED] px-5 py-4 font-roboto items-center text-sm text-[#171725]">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={DocPhoto}
                  alt="Raynald Schmidt"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-poppins font-medium text-sm text-[#242424]">
                    Raynald Schmidt
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Harmony Health
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Therapist
                  </p>
                </div>
              </div>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Berlin, Germany
              </p>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                15:00 - 22:00
              </p>
              <button className="flex items-center gap-3 font-poppins font-medium text-sm text-[#2BB567]">
                <AddDateBtn />
                Book date
              </button>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Confirmed
              </p>
            </div>
            <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border-x border-b border-[#ECECED] px-5 py-4 font-roboto items-center text-sm text-[#171725]">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={DocPhoto}
                  alt="Raynald Schmidt"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-poppins font-medium text-sm text-[#242424]">
                    Raynald Schmidt
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Harmony Health
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Therapist
                  </p>
                </div>
              </div>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Berlin, Germany
              </p>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                15:00 - 22:00
              </p>
              <button className="flex items-center gap-3 font-poppins font-medium text-sm text-[#2BB567]">
                <AddDateBtn />
                Book date
              </button>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Confirmed
              </p>
            </div>
            <div className="grid grid-cols-[minmax(262px,1.4fr)_minmax(194px,1fr)_minmax(194px,1fr)_minmax(262px,1.4fr)_minmax(136px,0.8fr)] border-x border-b border-[#ECECED] px-5 py-4 font-roboto items-center text-sm text-[#171725]">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={DocPhoto}
                  alt="Raynald Schmidt"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-poppins font-medium text-sm text-[#242424]">
                    Raynald Schmidt
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Harmony Health
                  </p>
                  <p className="font-roboto text-xs text-[#818181]">
                    Therapist
                  </p>
                </div>
              </div>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Berlin, Germany
              </p>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                15:00 - 22:00
              </p>
              <button className="flex items-center gap-3 font-poppins font-medium text-sm text-[#2BB567]">
                <AddDateBtn />
                Book date
              </button>
              <p className="font-poppins font-medium text-sm text-[#242424]">
                Confirmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageCard>
  );
};
