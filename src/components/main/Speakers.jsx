import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import speakers from "../../db/speakers.json";
import Subtitle from "../Subtitle";

console.log(speakers);
const Speakers = () => {
  return (
    <section id="oradores" className="text-3xl font-poppins pb-52 ">
      <Subtitle>Oradores</Subtitle>
      <section className="grid gap-y-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 font-inter">
        {speakers.map((speaker) => (
          <figure className="w-4/5 mx-auto flex flex-col gap-y-2 bg-[#121f3d] rounded-2xl">
            <img
              className="block w-48 h-48 border-8 mx-auto rounded-full"
              src={speaker.src}
              alt={speaker.name}
            />
            <h2 className="text-xl font-bold ">{speaker.name}</h2>
            <p className="text-sm font-medium">{speaker.ocupation}</p>
            <nav>
              <ul className="flex text-xl justify-center gap-x-2">
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
              </ul>
            </nav>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Speakers;
