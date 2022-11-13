import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import speakers from "../../db/speakers.json";
import Subtitle from "../Subtitle";

console.log(speakers);
const Speakers = () => {
  return (
    <section
      id="oradores"
      className="text-3xl desktop:w-3/5 mx-auto font-poppins pb-20 "
    >
      <Subtitle className="pb-4">Oradores</Subtitle>
      <section className="grid gap-y-10 grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-3 font-inter">
        {speakers.map((speaker) => (
          <figure className="mx-auto flex flex-col gap-y-2 rounded-2xl  to-op-primary-color relative ">
            <img
              className="block w-36 h-36 border-8 mx-auto rounded-full"
              src={speaker.src}
              alt={speaker.name}
            />
            <div className="relative bottom-6">
              <h2 className=" bg-primary-color text-xl font-bold ">
                {speaker.name}
              </h2>
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
            </div>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Speakers;
