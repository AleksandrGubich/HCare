import { useState } from "react";
import HCareIcon from "../../assets/HCareIcon.png";
import { BurgerMenu } from "../../assets/svgs/BurgerMenu";
import { Notifications } from "../../assets/svgs/Notifications";
import { router } from "../../router";
import { usePatient } from "../patient/hooks/usePatient";

export const Header = () => {
  const { data: patient } = usePatient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToPage = (path: "/" | "/medical-staff" | "/feedback") => {
    router.navigate({ to: path });
    setIsMenuOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between border-b border-[#E2E2EA] px-5 py-3 sm:px-7 lg:px-9.5 lg:py-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg"
          >
            <BurgerMenu />
          </button>

          {isMenuOpen && (
            <div className="absolute top-8 left-0 z-50 flex w-48 flex-col rounded-lg border border-[#ECECED] bg-white p-2 shadow-lg">
              <button
                type="button"
                onClick={() => goToPage("/")}
                className="rounded-md px-4 py-2 text-left hover:bg-[#F5F5F5] font-poppins"
              >
                Patient
              </button>

              <button
                type="button"
                onClick={() => goToPage("/medical-staff")}
                className="rounded-md px-4 py-2 text-left hover:bg-[#F5F5F5] font-poppins"
              >
                Medical Staff
              </button>

              <button
                type="button"
                onClick={() => goToPage("/feedback")}
                className="rounded-md px-4 py-2 text-left hover:bg-[#F5F5F5] font-poppins"
              >
                Feedback
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <img src={HCareIcon} alt="HCare" className="h-5 w-7" />

          <span className="font-poppins text-lg font-semibold text-[#44444F]">
            HCare
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Open notifications"
          className="flex h-10 w-10 items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A46]"
        >
          <Notifications />
        </button>

        <img
          src={patient?.photo}
          alt={patient?.fullName ?? "Patient"}
          className="h-9 w-9 rounded-full"
        />
      </div>
    </header>
  );
};
