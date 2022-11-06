import { useEffect, useState } from "preact/hooks";
import { IoCalendar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useTiping } from "../../hooks/useTiping";
import Counter from "./Counter";
import Diary from "./Diary";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";

const Main = () => {
  const keywords = useTiping(
    ["INNOVACIÓN", "TECNOLOGIA", "HABILIDADES BLANDAS"],
    300
  );

  return (
    <main className="text-center pt-10 font-inter desktop:pt-32 text-[var(--secondary-color)]  ">
      <section id="inicio" className="pb-10">
        <h1 className="text-center select-none text-5xl desktop:text-8xl font-poppins font-bold pb-4">
          <span>#EpetConf</span>
        </h1>
        <p className="select-none text-sm desktop:text-lg font-inter text-[#f1f1f1] font-medium ">
          <span className="border-r-2 border-white">
            CONFERENCIA DE {keywords}
          </span>
        </p>
        <section className="mt-8 flex justify-center text-[#121f3d]">
          <div className="py-4  px-4 ">
            <h2 className="text-6xl flex justify-center font-bold ">
              <IoCalendar />
            </h2>
            <div>
              <h3 className="text-lg desktop:text-2xl font-bold">
                23 Noviembre
              </h3>
              <p className="text-lg font-normal">9:00 p.m.</p>
            </div>
          </div>
          <div className="py-4 px-4">
            <h2 className="text-6xl flex justify-center font-bold">
              <IoLocationOutline />
            </h2>
            <div>
              <h3 className="text-lg desktop:text-2xl font-bold">
                Realicó, La Pampa
              </h3>
              <p className="text-lg font-normal">Centro cultural</p>
            </div>
          </div>
        </section>
        <Counter />
      </section>
      <div
        className="bg-[#121f3d] h-32 relative"
        style="clip-path: polygon(0 79%, 100% 34%, 100% 100%, 0 100%)"
      ></div>
      <div className="bg-[#121f3d]">
        <Diary />
        <Speakers />
        <Sponsors />
      </div>
      {/* <article className="mt-8 text-3xl font-poppins">
        <h2 className="text-[var(--primary-color)]">Patrocinadores</h2>
      </article> */}
    </main>
  );
};

export default Main;
