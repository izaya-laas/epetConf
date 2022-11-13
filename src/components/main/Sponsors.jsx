import Subtitle from "../Subtitle";
import sponsors from "../../db/sponsors.json";
import Agrotoken from "../sponsors/Agrotoken";
import Coderhouse from "../sponsors/Coderhouse";
import Msconsultores from "../sponsors/Mconsultores";
import ShellMartinez from "../sponsors/ShellMartinez";
import ElIman from "../sponsors/ElIman";
import Neucor from "../sponsors/Neucor";

const Sponsors = () => {
  return (
    <section className="pb-10" id="sponsors">
      <Subtitle className="pb-4">Sponsors</Subtitle>
      <small className="text-sm block mb-8 font-semibold italic">
        Esto se logró gracias a la confianza de
      </small>
      <nav className="flex flex-col w-3/4 sm:w-2/4 lg:hidden gap-y-6 mx-auto">
        <ShellMartinez />
        <ElIman />
        <p>Pampagonia</p>
        <p>Diesel Lange</p>
        <Msconsultores />
        <Coderhouse />
        <Neucor />
        <Agrotoken />
        <p>Gondean</p>
      </nav>

      <nav className="hidden desktop:grid desktop:grid-cols-2 desktop:place-items-center mx-auto gap-y-6 w-3/4">
        <ShellMartinez />
        <ElIman />
        <Msconsultores />
        <Agrotoken />
        <Coderhouse />
        <Neucor />
        <p>Pampagonia</p>
        <p>Diesel Lange</p>
        <p>Gondean</p>
      </nav>
    </section>
  );
};

export default Sponsors;
