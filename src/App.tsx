import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import HCareIcon from "./assets/HCareIcon.png";
import PersonAvatar from "./assets/PersonAvatar.png";
import { BurgerMenu } from "./assets/svgs/BurgerMenu";
import { Notifications } from "./assets/svgs/Notifications";

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="flex justify-between items-center px-7 py-3 sm:px-9.5 sm:py-4 border-b border-solid border-[#E2E2EA]">
        <div className="flex items-center gap-3.5 sm:gap-7">
          <BurgerMenu />
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={HCareIcon} alt="HCareIcon" className="w-7 h-5" />
            <p className="font-poppins text-xl font-semibold text-[#44444F]">
              HCare
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3.5 sm:gap-7">
          <button>
            <Notifications />
          </button>
          <img
            src={PersonAvatar}
            alt="PesronAvatar"
            className="border border-[#EEEEEE] rounded-4xl cursor-pointer w-9 h-9"
          />
        </div>
      </header>
      <main className="bg-[#FAFAFA] flex flex-col flex-1 pt-2.5 px-5 sm:px-12.5 sm:pt-3.5 md:px-20 md:pt-4.5 lg:px-30 lg:pt-4.5 xl:px-42.5 xl:pt-6.5 2xl:px-55 2xl:pt-7.5">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
