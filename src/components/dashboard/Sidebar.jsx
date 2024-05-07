import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../shared/Logo";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../util/constants/SidebarConstants";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

export default function Sidebar({ screenWidth }) {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <>
      <div
        className={`pt-10 h-full bg-sky-950 w-60 p-3 font-primary flex flex-col border-r border-sky-700 md:pt-0 ${
          screenWidth < 768 && "absolute z-40"
        }`}
      >
        <div className="flex items-center gap-2 px-1 py-3">
          <Logo
            imageSize={"size-10"}
            textSize={"text-xl"}
            textColor={"text-sky-50"}
          />
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-sky-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
          <div
            className="flex items-center gap-2 font-light px-3 py-2 text-red-500 rounded-sm text-base cursor-pointer hover:bg-sky-700 hover:no-underline active:bg-sky-600"
            onClick={() => {
              handleLogout();
            }}
          >
            <span className="text-2xl">{<HiOutlineLogout />}</span>
            Logout
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? "bg-sky-800 text-sky-300" : "text-sky-400",
        "flex items-center gap-2 font-light px-3 py-2 hover:bg-sky-700 hover:no-underline active:bg-sky-600 rounded-sm text-base"
      )}
    >
      <span className="text-2xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
