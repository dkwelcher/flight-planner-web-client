export default function IntroSection({ backgroundImage, title, description }) {
  return (
    <div
      className={`px-4 pt-12 pb-4 bg-cover bg-center text-sky-50 ${backgroundImage} md:py-12 md:px-4 shadow-md shadow-sky-950`}
    >
      <h1 className="pb-4 font-secondary font-medium text-4xl text-shadow lg:text-5xl">
        {title}
      </h1>
      <p className="pb-4 font-primary text-lg text-shadow lg:w-[60%] 2xl:w-[40%]">
        {description}
      </p>
    </div>
  );
}
