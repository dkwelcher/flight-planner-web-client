import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function ToggleSidebarButton({ isOpen, setIsOpen }) {
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className={`absolute w-full p-2 text-3xl text-slate-200 z-50 md:invisible ${
          !isOpen && "bg-transparent-shadow"
        }`}
        onClick={() => {
          toggleSidebar();
        }}
      >
        {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
    </>
  );
}
