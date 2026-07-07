import HCareIcon from "../assets/HCareIcon.png";
import PersonAvatar from "../assets/PersonAvatar.png";
import { BurgerMenu } from "../assets/svgs/BurgerMenu";
import { Notifications } from "../assets/svgs/Notifications";

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid border-[#E2E2EA] px-5 py-3 sm:px-7 lg:px-9.5 lg:py-4">
      <div className="flex items-center gap-3.5 sm:gap-7">
        <button type="button" aria-label="Open menu">
          <BurgerMenu />
        </button>

        <div className="flex cursor-pointer items-center gap-2">
          <img src={HCareIcon} alt="HCare logo" className="h-5 w-7" />

          <p className="font-poppins text-lg font-semibold text-[#44444F] sm:text-xl">
            HCare
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3.5 sm:gap-7">
        <button type="button" aria-label="Notifications">
          <Notifications />
        </button>

        <button type="button" aria-label="Open profile">
          <img
            src={PersonAvatar}
            alt="Person avatar"
            className="h-9 w-9 cursor-pointer rounded-4xl border border-[#EEEEEE]"
          />
        </button>
      </div>
    </header>
  );
};
