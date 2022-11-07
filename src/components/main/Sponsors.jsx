import Subtitle from "../Subtitle";
import sponsors from "../../db/sponsors.json";

const Sponsors = () => {
  return (
    <section id="patrocinadores" className="pb-52">
      <Subtitle>Sponsors</Subtitle>
      <nav>
        <ul className="w-4/5 grid grid-cols-1 place-items-center  justify-items-start tablet:justify-items-center desktop:grid-cols-2  desktop:gap-x-20 mx-auto gap-y-8">
          {sponsors.map((sponsor) => (
            <a
              href={sponsor.href}
              className="cursor-pointer"
              target="_BLANCK"
              rel="noopenner"
            >
              <img
                className="w-full h-full block"
                src={sponsor.src}
                alt={sponsor.name}
              />
            </a>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sponsors;
