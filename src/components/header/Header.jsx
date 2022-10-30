import { useContext } from "preact/hooks";

import mobileContext from "../../context/mobileContext";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import NavBar from "./NavBar";

const Header = () => {
  let [isMobile] = useContext(mobileContext);

  return (
    <header
      className={` w-full flex items-center h-12 tablet:h-14 px-4 py-6 z-20 text-secondary-color font-inter`}
    >
      <p className="text"></p>
      <div className={`flex items-center w-full ${!isMobile && "flex-row"}`}>
        {isMobile ? (
          <MobileNavbar />
        ) : (
          <DesktopNavbar>
            <NavBar
              className="flex justify-center text-lg w-full"
              sectionClass={"flex items-center justify-center gap-8"}
            />
          </DesktopNavbar>
        )}
      </div>
    </header>
  );
};

export default Header;
