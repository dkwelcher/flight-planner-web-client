import Button from "../../shared/Button";

export default function AircraftCard({
  aircraftId,
  aircraftMake,
  aircraftModel,
  aircraftType,
  fuelType,
  fuelTankSize,
  fuelBurnRate,
  airspeed,
  minimumRunwayLengthRequired,
  index,
}) {
  const headingContainerStyle = "p-1 border border-sky-600 rounded-md";
  const headingStyle = "font-semibold border-b border-sky-400";
  const buttonContainerStyle = "p-4 grid grid-cols-2 gap-x-2";

  return (
    <div
      className={`mt-4 p-2 font-primary rounded-md ${
        index % 2 == 0 ? "bg-sky-300 text-sky-900" : "bg-sky-200 text-sky-800"
      }`}
      key={aircraftId}
    >
      <div className="pb-2 font-secondary font-bold text-2xl">
        <h4>
          {aircraftMake} {aircraftModel}
        </h4>
      </div>
      <div className="grid grid-cols-2 2xl:grid-cols-3 gap-1">
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Make:</p>
          <p>{aircraftMake}</p>
        </div>
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Model:</p>
          <p>{aircraftModel}</p>
        </div>
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Aircraft Type:</p>
          <p>{aircraftType}</p>
        </div>
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Fuel Type:</p>
          <p>{fuelType}</p>
        </div>
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Fuel Tank Size:</p>
          <p>{fuelTankSize}</p>
        </div>
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Fuel Burn Rate:</p>
          <p>{fuelBurnRate}</p>
        </div>
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Cruise Airspeed:</p>
          <p>{airspeed}</p>
        </div>
        <div className={headingContainerStyle}>
          <p className={headingStyle}>Minimum Runway Length Required:</p>
          <p>{minimumRunwayLengthRequired}</p>
        </div>
      </div>
      <div className={buttonContainerStyle}>
        <Button
          buttonText={"Edit"}
          handleUserAction={() => {
            console.log(aircraftId);
          }}
        />
        <Button
          buttonText={"Delete"}
          handleUserAction={() => {
            console.log(aircraftId);
          }}
        />
      </div>
    </div>
  );
}
