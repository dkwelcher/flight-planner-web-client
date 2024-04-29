import Logo from "../shared/Logo";
import Link from "./shared/Link";

function LandingPage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-y-2 bg-sky-100">
        <Logo imageSize="size-24" textSize="text-4xl" />
        <Link />
      </div>
    </>
  );
}

export default LandingPage;
