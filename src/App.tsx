import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import HCareIcon from "./assets/HCareIcon.png";
import PersonAvatar from "./assets/PersonAvatar.png";
import { BurgerMenu } from "./assets/svgs/BurgerMenu";
import { Notifications } from "./assets/svgs/Notifications";

function App() {
  return (
    <div className="flex min-h-dvh flex-col">
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

      <main className="flex flex-1 flex-col bg-[#FAFAFA] px-4 pt-2.5 sm:px-6 sm:pt-3.5 md:px-10 md:pt-4.5 lg:px-16 xl:px-24 2xl:px-40 2xl:pt-7.5">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
