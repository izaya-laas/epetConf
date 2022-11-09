import Subtitle from "../Subtitle";
import sponsors from "../../db/sponsors.json";
import Agrotoken from "../sponsors/Agrotoken";
import Coderhouse from "../sponsors/Coderhouse";
import Msconsultores from "../sponsors/Mconsultores";
import ShellMartinez from "../sponsors/ShellMartinez";

const Sponsors = () => {
  return (
    <section className="pb-10" id="sponsors">
      <Subtitle className="pb-4">Sponsors</Subtitle>
      <small className="text-sm block mb-8 font-semibold italic">
        Esto se logró gracias a la confianza de
      </small>
      <nav className="flex flex-col w-3/4 sm:w-2/4 lg:hidden gap-y-6 mx-auto">
        <ShellMartinez />
        <Msconsultores />
        <Agrotoken />
        <Coderhouse />
      </nav>

      <nav className="hidden lg:grid lg:grid-cols-2 mx-auto gap-y-6 w-3/4">
        <ShellMartinez />
        <Msconsultores />
        <Agrotoken />
        <Coderhouse />
      </nav>
    </section>
  );
};

export default Sponsors;
