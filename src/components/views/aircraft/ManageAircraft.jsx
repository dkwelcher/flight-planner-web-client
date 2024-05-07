import IntroSection from "../shared/IntroSection";

export default function ManageAircraft() {
  return (
    <div>
      <div>
        <IntroSection
          backgroundImage={"bg-manage-aircraft-intro-desktop"}
          title={"Manage Aircraft"}
          description={"Create, edit, and delete aircraft, real or imagined."}
        />
      </div>
    </div>
  );
}
