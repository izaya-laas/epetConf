import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header
      className={` w-full flex items-center h-12 tablet:h-14 px-4 py-6 z-20 text-fourth-color bg-gradient-to-r from-secondary-color via-primary-color to-secondary-color font-inter`}
    >
      <div className={`flex items-center w-full`}>
        <MobileNavbar />

        <DesktopNavbar>
          <NavBar
            className="hidden sm:flex justify-center text-lg w-full"
            sectionClass={"flex items-center justify-center gap-8"}
          />
        </DesktopNavbar>
      </div>
    </header>
  );
};

export default Header;
