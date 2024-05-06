import LogoImage from "../../assets/flight-planner-logo.png";

function Logo({ imageSize, textSize }) {
  return (
    <>
      <div className="flex items-center font-secondary">
        <img
          className={`${imageSize}`}
          src={LogoImage}
          alt="Flight Planner log of an outline of a commercial jet"
        />
        <h2 className={`pl-2 ${textSize}`}>Flight Planner</h2>
      </div>
    </>
  );
}

export default Logo;
