import { useState } from "preact/hooks";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import NavBar from "./NavBar";

const MobileNavbar = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(true);

  const setOpenHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  return (
    <>
      <div className={`z-20 ${isOpenHamburger ? "relative" : "fixed"}`}>
        {isOpenHamburger ? (
          <RiMenu2Fill
            size="40px"
            onClick={() => {
              setOpenHamburger();
            }}
          />
        ) : (
          <IoMdClose
            className=""
            size="40px"
            onClick={() => {
              setOpenHamburger();
            }}
          />
        )}
      </div>
      <div>
        <NavBar
          sectionClass={`fixed z-10 flex flex-col items-start gap-4 top-0 pt-20 tablet:top-14 right-0 bg-black/90 w-full font-bold text-lg text-white pt-4 px-8 transition-transform duration-700 h-[calc(100%-3rem)] items-center tablet:w-2/5 ${
            isOpenHamburger ? "translate-x-full" : ""
          }`}
          setOpenHamburger={setOpenHamburger}
        />
      </div>
    </>
  );
};

export default MobileNavbar;

// sectionClass: `fixed flex flex-col items-start gap-4 top-12 tablet:top-14 right-0 bg-black/75 w-full font-bold text-xl text-white pt-4 px-8 transition-transform duration-700 h-[calc(100%-3rem)] items-center tablet:w-2/5 ${
//   isOpenHamburger ? "translate-x-full" : ""
// }`,
