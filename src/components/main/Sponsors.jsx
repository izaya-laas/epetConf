import Subtitle from "../Subtitle";
import sponsors from "../../db/sponsors.json";

const Sponsors = () => {
  return (
    <section className="pb-10" id="sponsors">
      <Subtitle className="pb-4">Sponsors</Subtitle>

      <nav className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 place-items-center desktop:gap-y-6 w-3/5 tablet:w-4/5 gap-y-6 mx-auto">
        {sponsors.map((sponsor, index) => {
          return sponsor.href ? (
            <a href={sponsor.href} target="_BLANCK" rel="noopener noreferrer">
              <img
                src={sponsor.src}
                alt={sponsor.name}
                className="max-h-52 h-full"
              />
            </a>
          ) : (
            <img
              src={sponsor.src}
              alt={sponsor.name}
              className="max-h-52 h-full"
            />
          );
        })}
      </nav>
    </section>
  );
};

export default Sponsors;
