import { useState } from "react";
import IntroSection from "../shared/IntroSection";
import Button from "../../shared/Button";
import AircraftCard from "./shared/AircraftCard";
import SelectAircraftMakeModal from "../../modals/SelectAircraftMakeModal";

export default function ManageAircraft() {
  const [aircraftList, setAircraftList] = useState([]);
  const [aircraft, setAircraft] = useState({});

  const [isSelectAircraftMakeModalOpen, setIsSelectAircraftMakeModalOpen] =
    useState(false);

  function handleCreateAircraft() {
    console.log("createaircraft");
  }

  function handleSelectAircraft() {
    setIsSelectAircraftMakeModalOpen(true);
  }

  return (
    <div>
      {isSelectAircraftMakeModalOpen && (
        <SelectAircraftMakeModal
          setIsSelectAircraftModalOpen={setIsSelectAircraftMakeModalOpen}
          setAircraftList={setAircraftList}
        />
      )}
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
      <div className="px-2 lg:grid lg:grid-cols-2 lg:gap-x-2 2xl:grid-cols-3">
        {aircraftList.map((aircraft, index) => (
          <AircraftCard
            aircraft={aircraft}
            index={index}
            key={aircraft.aircraftId}
          />
        ))}
      </div>
    </div>
  );
}
