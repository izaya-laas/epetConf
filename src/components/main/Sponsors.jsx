import Subtitle from "../Subtitle";
import Agrotoken from "../sponsors/Agrotoken";
import Coderhouse from "../sponsors/Coderhouse";
import Msconsultores from "../sponsors/Mconsultores";
import ShellMartinez from "../sponsors/ShellMartinez";
import ElIman from "../sponsors/ElIman";
import Neucor from "../sponsors/Neucor";
import sponsors from "../../db/sponsors.json";

const Sponsors = () => {
  return (
    <section className="pb-10" id="sponsors">
      <Subtitle className="pb-4">Sponsors</Subtitle>

      <nav className="flex flex-col w-3/4 sm:w-2/4 lg:hidden gap-y-6 mx-auto">
        {sponsors.map((sponsor) => (
          <img src={sponsor.src} alt={sponsor.name} />
        ))}
        {/* <ShellMartinez />
        <ElIman />
        <p>Diesel Lange</p>
        <Msconsultores />
        <Coderhouse />
        <Neucor />
        <Agrotoken />
        <p>Gondean</p> */}
      </nav>

      <nav className="hidden desktop:grid desktop:grid-cols-2 desktop:place-items-center mx-auto gap-y-6 w-3/5">
        <ShellMartinez />
        <ElIman />
        <Msconsultores />
        <Agrotoken />
        <Coderhouse />
        <Neucor />
        <p>Diesel Lange</p>
        <p>Gondean</p>
      </nav>
    </section>
  );
};

export default Sponsors;
