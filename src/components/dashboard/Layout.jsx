import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout({ screenWidth }) {
  return (
    <>
      <div className="flex flex-row bg-slate-100 h-screen w-screen overflow-hidden">
        <div>{<Sidebar screenWidth={screenWidth} />}</div>
        <div>{<Outlet />}</div>
      </div>
    </>
  );
}
