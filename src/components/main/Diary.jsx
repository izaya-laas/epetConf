import Subtitle from "../Subtitle";
import diary from "../../db/diary.json";

const Diary = () => {
  return (
    <section id="agenda" className="max-w-6xl desktop:w-3/5 mx-auto pb-20">
      <Subtitle className="pb-4 ">Agenda</Subtitle>

      <div className="flex flex-col gap-y-5 px-5">
        {diary.map((talk) => (
          <figure className="grid grid-cols-1 gap-y-4 tablet:grid-cols-4 border-2 border-gray-color/50 min-w-[250px] rounded-2xl hover:brightness-125 py-4 px-4 tablet:py-0 bg-gradient-to-bl from-transparent via-transparent to-op-primary-color backdrop-blur transition-all duration-300 mx-auto">
            <picture className="order-2 md:order-1">
              <img
                src={talk.src}
                alt="midu"
                className="w-36 h-36 desktop:w-full desktop:h-full mx-auto object-cover"
              />
            </picture>

            <div className="flex flex-col items-center justify-center font-bold order-1 tablet:order-2 tablet:col-span-2 text-center px-4">
              <p className="text-xl">{talk.title}</p>
              <i className="text-primary-color text-2xl">{talk.speaker}</i>
            </div>

            <div className="flex flex-col items-center justify-center order-3 tablet:order-3 ">
              <p className="text-3xl font-bold text-primary-color">
                {talk.time}
              </p>
              <smaill className="text-xs italic">{talk.duration}.</smaill>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Diary;
