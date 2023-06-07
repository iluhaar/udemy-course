import { Outlet } from "react-router-dom";

import MainNavigation from "../Navigation/MainNavigation";

const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
