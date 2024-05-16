import Button from "../../../shared/Button";

export default function AircraftCard({ aircraft, index }) {
  const buttonContainerStyle = "p-4 grid grid-cols-2 gap-x-2";

  return (
    <div
      className={`mt-4 p-2 flex flex-col justify-center font-primary rounded-md shadow-md ${
        index % 2 == 0
          ? "bg-sky-300 text-sky-900 shadow-sky-600"
          : "bg-sky-200 text-sky-800 shadow-sky-500"
      }`}
      key={aircraft.aircraftId}
    >
      <div className="pb-2 font-secondary font-bold text-3xl text-sky-950">
        <div className="flex justify-between">
          <h2>
            {aircraft.aircraftMake} {aircraft.aircraftModel}
          </h2>
          <p className="font-primary font-normal text-base">
            {aircraft.aircraftType}
          </p>
        </div>
      </div>
      <div className={buttonContainerStyle}>
        <Button
          buttonText={"Edit"}
          data-key={index}
          handleUserAction={() => {
            console.log(aircraft.aircraftId);
          }}
        />
        <Button
          buttonText={"Delete"}
          data-key={index}
          handleUserAction={() => {
            console.log(aircraft.aircraftId);
          }}
        />
      </div>
    </div>
  );
}
