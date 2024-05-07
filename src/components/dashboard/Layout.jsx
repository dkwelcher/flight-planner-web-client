import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ToggleSidebarButton from "./shared/ToggleSidebarButton";

export default function Layout({ screenWidth }) {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      let targetElement = event.target;
      let isInsideDropdown = false;

      while (targetElement != null) {
        if (targetElement === dropdownRef.current) {
          isInsideDropdown = true;
          break;
        }
        targetElement = targetElement.parentNode;
      }

      if (!isInsideDropdown) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row bg-sky-50 h-screen w-screen overflow-hidden">
        <div>
          {<ToggleSidebarButton isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
        <div className="invisible absolute md:visible md:static">
          {screenWidth >= 768 && <Sidebar screenWidth={screenWidth} />}
        </div>
        <div className={`z-40 h-full ${screenWidth < 768 ? "" : "hidden"}`}>
          <div
            className={`z-30 transition-all duration-700 ease-in-out ${
              isOpen && screenWidth < 768
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
            ref={dropdownRef}
          >
            <Sidebar screenWidth={screenWidth} />
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-auto">{<Outlet />}</div>
      </div>
    </>
  );
}
