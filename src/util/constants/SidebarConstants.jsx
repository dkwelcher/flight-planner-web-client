import { HiOutlineHome } from "react-icons/hi";
import { PiAirplane, PiAirTrafficControl, PiGear } from "react-icons/pi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "/dashboard",
    icon: <HiOutlineHome />,
  },
  {
    key: "manageAircraft",
    label: "Manage Aircraft",
    path: "/dashboard/aircraft/manage",
    icon: <PiAirplane />,
  },
  {
    key: "manageAirports",
    label: "Manage Airports",
    path: "/dashboard/airports/manage",
    icon: <PiAirTrafficControl />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/dashboard/settings",
    icon: <PiGear />,
  },
];
