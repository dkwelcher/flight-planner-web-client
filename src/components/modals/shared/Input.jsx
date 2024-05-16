export default function Input({ inputType, handleInputAction }) {
  return (
    <input
      className="px-2 py-1 bg-sky-50 border border-solid border-sky-400 rounded-md shadow-sm shadow-sky-600 focus:bg-sky-200 focus:text-sky-900 outline-none"
      type={inputType}
      onChange={(event) => handleInputAction(event.target.value)}
    />
  );
}
