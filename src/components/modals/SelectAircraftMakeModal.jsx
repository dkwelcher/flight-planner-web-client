import { useState } from "react";
import Input from "./shared/Input";
import Button from "../shared/Button";

export default function SelectAircraftMakeModal({
  setIsSelectAircraftModalOpen,
  setAircraftList,
}) {
  const [aircraftMake, setAircraftMake] = useState("");

  async function handleSelectAction() {
    const getAircraftByMakeEndpoint = `http://localhost:8080/aircraft/make/${aircraftMake}`;

    try {
      const response = await fetch(getAircraftByMakeEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.error}`);
      }

      const result = await response.json();
      setAircraftList(result);
      setIsSelectAircraftModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancelAction() {
    setIsSelectAircraftModalOpen(false);
  }
  return (
    <div className="w-full h-screen fixed flex justify-center items-center bg-transparent-shadow z-50">
      <div className="m-4 p-4 bg-sky-50 font-primary rounded-md md:-translate-x-32 shadow-md shadow-sky-950">
        <div className="pb-6 grid grid-cols-2 justify-center items-center">
          <h2>Enter a make:</h2>
          <Input inputType={"text"} handleInputAction={setAircraftMake} />
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <Button
            buttonText={"Select by Make"}
            handleUserAction={handleSelectAction}
          />
          <Button buttonText={"Cancel"} handleUserAction={handleCancelAction} />
        </div>
      </div>
    </div>
  );
}
