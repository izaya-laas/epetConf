import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed z-50 w-full block rounded-b-md">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Header;
