import Logo from "../shared/Logo";
import Link from "./shared/Link";

export default function LandingPage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-y-6 bg-sky-50">
        <Logo imageSize="size-16" textSize="text-4xl" />
        <Link />
      </div>
    </>
  );
}
