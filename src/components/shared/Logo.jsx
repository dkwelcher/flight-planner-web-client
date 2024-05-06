import LogoImage from "../../assets/flight-planner-logo.png";

export default function Logo({ imageSize, textSize, textColor }) {
  return (
    <>
      <div className="flex items-center font-secondary">
        <img
          className={`${imageSize}`}
          src={LogoImage}
          alt="Flight Planner log of an outline of a commercial jet"
        />
        <h2 className={`pl-2 ${textSize} ${textColor}`}>Flight Planner</h2>
      </div>
    </>
  );
}
