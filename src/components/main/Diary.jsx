import Subtitle from "../Subtitle";
import diary from "../../db/diary.json";

const Diary = () => {
  return (
    <section id="agenda" className="max-w-6xl mx-auto pb-40">
      <Subtitle className="pb-12 ">Agenda</Subtitle>

      <div className="flex flex-col gap-y-5 px-5">
        {diary.map((talk) => (
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-4 border-2 border-gray-color/50 rounded-2xl hover:brightness-125 py-4 px-4 md:py-0 bg-gradient-to-bl from-transparent via-transparent to-op-primary-color backdrop-blur transition-all duration-300 mx-auto">
            <picture className="order-2 md:order-1">
              <img
                src={talk.src}
                alt="midu"
                className="w-52 md:w-full h-44 mx-auto object-cover"
              />
            </picture>

            <div className="flex flex-col items-center justify-center font-bold order-1 md:order-2 md:col-span-2 text-center px-4">
              <p className="text-xl">{talk.title}</p>
              <i className="text-primary-color text-2xl">{talk.speaker}</i>
            </div>

            <div className="flex flex-col items-center justify-center order-3 md:order-3 ">
              <p className="text-3xl font-bold text-primary-color">
                {talk.time}
              </p>
              <smaill className="text-xs italic">{talk.duration}.</smaill>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diary;
