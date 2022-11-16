import Subtitle from "../Subtitle";
import sponsors from "../../db/sponsors.json";

const Sponsors = () => {
  return (
    <section className="pb-10" id="sponsors">
      <Subtitle className="pb-4">Sponsors</Subtitle>

      <nav className="flex flex-col desktop:grid desktop:grid-cols-2 desktop:place-items-center desktop:gap-y-6 w-3/5 desktop:w-3/4 sm:w-2/4  gap-y-6 mx-auto">
        {sponsors.map((sponsor) => (
          <img src={sponsor.src} alt={sponsor.name} />
        ))}
      </nav>
    </section>
  );
};

export default Sponsors;
