import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import HCareIcon from "./assets/HCareIcon.png";
import PersonAvatar from "./assets/PersonAvatar.png";
import { BurgerMenu } from "./assets/svgs/BurgerMenu";
import { Notifications } from "./assets/svgs/Notifications";

function App() {
  return (
    <>
      <header>
        <div>
          <BurgerMenu />
          <div>
            <img src={HCareIcon} alt="HCareIcon" />
            <p>HCare</p>
          </div>
        </div>
        <div>
          <Notifications />
          <img src={PersonAvatar} alt="PesronAvatar" />
        </div>
      </header>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
