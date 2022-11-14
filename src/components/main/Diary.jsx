import Subtitle from "../Subtitle";
import morning from "../../db/diary-morning.json";
import afternoon from "../../db/diary-afternoon.json";
import night from "../../db/diary-night.json";
import Talks from "./Talks";

const Diary = () => {
  return (
    <section
      id="agenda"
      className="max-w-6xl tablet:w-4/5 desktop:w-3/5 mx-auto pb-20"
    >
      <Subtitle className="pb-4 ">Agenda</Subtitle>
      <Talks diary={morning} />
      <div className="border-b-8 my-16 border-primary-color"></div>
      <Talks diary={afternoon} />
      <div className="border-b-8 my-16 border-primary-color"></div>
      <Talks diary={night} />
    </section>
  );
};

export default Diary;
