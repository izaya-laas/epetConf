const Talks = ({ diary }) => {
  return (
    <div className="flex flex-col items-center gap-y-5 px-5">
      {diary.map((talk) => (
        <a href={`${talk.id ? "#" + talk.id : "#break"}`} className="w-full">
          <figure
            className={`grid grid-cols-1 gap-y-4 tablet:grid-cols-4 border-2 border-gray-color/50 min-w-[280px] tablet:min-h-[150px] max-w-[280px] tablet:w-full tablet:max-w-none rounded-2xl hover:brightness-125 py-4 pr-4 overflow-hidden tablet:py-0 bg-gradient-to-bl from-transparent via-transparent to-op-primary-color backdrop-blur transition-all duration-300  desktop:w-full cursor-pointer desktop:max-h-40 mx-auto ${
              talk.isBreak && "bg-blue-800"
            }`}
          >
            {!talk.isBreak && (
              <picture className="order-2 md:order-1 max-h-40">
                <img
                  src={talk.src}
                  alt={talk.speaker}
                  className="w-36 h-36 desktop:w-full desktop:h-full mx-auto object-cover rounded-lg tablet:rounded-none"
                />
              </picture>
            )}

            <div className="flex flex-col items-center justify-center font-bold order-1 tablet:order-2 tablet:col-span-2 text-center px-4">
              <p className={`text-xl ${!talk.speaker && "text-2xl"} `}>
                {talk.title}
              </p>
              {!talk.isBreak && (
                <span className="text-primary-color text-2xl">
                  {talk.speaker}
                </span>
              )}
              {talk.speakers && (
                <div className="grid  desktop:grid-cols-2 gap-x-4 text-primary-color">
                  {talk.speakers.map((speaker) => (
                    <small className="block">{speaker}</small>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`flex flex-col items-center justify-center order-3 tablet:order-3 py-2 ${
                talk.isBreak &&
                "desktop:flex-row desktop:justify-between desktop:w-full"
              }`}
            >
              <p className="text-3xl font-bold text-primary-color">
                {talk.time}
              </p>
              <small className="text-xs italic">{talk.duration}.</small>
            </div>
          </figure>
        </a>
      ))}
    </div>
  );
};

export default Talks;
