import Subtitle from "../Subtitle";
import diary from "../../db/diary.json";

const Diary = () => {
  return (
    <section id="agenda" className="pb-52 max-w-6xl mx-auto">
      <Subtitle>Agenda</Subtitle>
      <div>
        <div className="w-4/5 mx-auto border-x-2 border-y border-[#7dd3fc]">
          {diary.map((talk) => (
            <div className="border p-2 flex flex-col tablet:flex-row tablet:justify-between tablet:items-center tablet:px-10 border-[#7dd3fc] ">
              <div className="tablet:order-3">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {talk.title}
                </h3>
                <small className="text-lg text-[#f1f1f1]">{talk.speaker}</small>
              </div>
              <div className="tablet:order-3">
                <img
                  className="block w-24 h-24 my-4 mx-auto rounded-xl"
                  src={talk.src}
                  alt="midu"
                />
              </div>
              <div className="tablet:order-2 tablet:flex tablet:flex-col-reverse">
                <small className="text-sm tablet:text-sm">
                  {talk.duration}
                </small>
                <p className="text-xl tablet:text-2xl font-bold text-[#7dd3fc]">
                  {talk.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diary;
