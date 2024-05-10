export default function Button({ buttonText, uniqueStyles, handleUserAction }) {
  return (
    <button
      className={`font-primary bg-sky-700 text-sky-200 px-6 py-2 rounded-md shadow-md shadow-sky-950 hover:bg-sky-600 hover:text-sky-50 ${uniqueStyles}`}
      onClick={() => {
        handleUserAction();
      }}
    >
      {buttonText}
    </button>
  );
}
