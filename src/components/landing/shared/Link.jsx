import { useNavigate } from "react-router-dom";

export default function Link({ navigationPath }) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(navigationPath);
  }

  return (
    <>
      <div className="font-primary">
        <a
          className="p-4 rounded-2xl text-base text-sky-100 bg-sky-900 cursor-pointer hover:text-sky-50 hover:bg-sky-700"
          onClick={() => {
            handleNavigation();
          }}
        >
          Go to Dashboard
        </a>
      </div>
    </>
  );
}
