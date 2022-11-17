const Talks = ({ diary }) => {
  return (
    <div className="flex flex-col items-center gap-y-5 px-5">
      {diary.map((talk) => (
        <figure
          className={`grid grid-cols-1 gap-y-4 tablet:grid-cols-4 border-2 border-gray-color/50 min-w-[280px] max-w-[280px] tablet:w-full tablet:max-w-none rounded-2xl hover:brightness-125 py-4 pr-4 overflow-hidden tablet:py-0 bg-gradient-to-bl from-transparent via-transparent to-op-primary-color backdrop-blur transition-all duration-300  desktop:w-full ${
            talk.isBreak && "bg-blue-600"
          }`}
        >
          {!talk.isBreak && (
            <picture className="order-2 md:order-1">
              <img
                src={talk.src}
                alt={talk.speaker}
                className="w-36 h-36 desktop:w-full desktop:h-full mx-auto object-cover rounded-lg tablet:rounded-none"
              />
            </picture>
          )}

          <div className="flex flex-col items-center justify-center font-bold order-1 tablet:order-2 tablet:col-span-2 text-center px-4">
            <p className="text-xl">{talk.title}</p>
            {!talk.isBreak && (
              <span className="text-primary-color text-2xl">
                {talk.speaker}
              </span>
            )}
          </div>

          <div
            className={`flex flex-col items-center justify-center order-3 tablet:order-3 ${
              talk.isBreak &&
              "desktop:flex-row desktop:justify-between desktop:w-full"
            }`}
          >
            <p className="text-3xl font-bold text-primary-color">{talk.time}</p>
            <small className="text-xs italic">{talk.duration}.</small>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default Talks;
