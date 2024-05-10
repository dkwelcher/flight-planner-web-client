import { useState } from "react";
import IntroSection from "../shared/IntroSection";
import Button from "../shared/Button";
import AircraftCard from "./shared/AircraftCard";

export default function ManageAircraft() {
  const [aircraftList, setAircraftList] = useState([
    {
      aircraftId: 31,
      aircraftMake: "Boeing",
      aircraftModel: "747",
      aircraftType: "jet",
      fuelType: "jeta",
      fuelTankSize: 79304.0,
      fuelBurnRate: 6000.0,
      airspeed: 550.0,
      range: 7269.53,
      minimumRunwayLengthRequired: 6500,
    },
    {
      aircraftId: 32,
      aircraftMake: "Boeing",
      aircraftModel: "777",
      aircraftType: "jet",
      fuelType: "jeta",
      fuelTankSize: 126000.0,
      fuelBurnRate: 8000.0,
      airspeed: 550.0,
      range: 8662.5,
      minimumRunwayLengthRequired: 7000,
    },
    {
      aircraftId: 35,
      aircraftMake: "Beechcraft",
      aircraftModel: "Bonanza",
      aircraftType: "prop",
      fuelType: "avgas",
      fuelTankSize: 200.0,
      fuelBurnRate: 40.0,
      airspeed: 130.0,
      range: 650.5,
      minimumRunwayLengthRequired: 1500,
    },
  ]);

  function handleCreateAircraft() {
    console.log("createaircraft");
  }

  function handleSelectAircraft() {
    console.log("selectaircraft");
  }

  return (
    <div>
      <div>
        <IntroSection
          backgroundImage={"bg-manage-aircraft-intro-desktop"}
          title={"Manage Aircraft"}
          description={"Create, edit, and delete aircraft, real or imagined."}
        />
      </div>
      <div className="p-10 flex justify-center items-center gap-x-6 border-b border-sky-200">
        <Button buttonText={"Create"} handleUserAction={handleCreateAircraft} />
        <Button buttonText={"Select"} handleUserAction={handleSelectAircraft} />
      </div>
      <div className="px-2">
        {aircraftList.map((aircraft, index) => (
          <AircraftCard
            aircraftId={aircraft.aircraftId}
            aircraftMake={aircraft.aircraftMake}
            aircraftModel={aircraft.aircraftModel}
            aircraftType={aircraft.aircraftType}
            fuelType={aircraft.fuelType}
            fuelTankSize={aircraft.fuelTankSize}
            fuelBurnRate={aircraft.fuelBurnRate}
            airspeed={aircraft.airspeed}
            minimumRunwayLengthRequired={aircraft.minimumRunwayLengthRequired}
            index={index}
            key={aircraft.aircraftId}
          />
        ))}
      </div>
    </div>
  );
}
