import { NAVLINKS } from "../../app";

const DesktopNavbar = ({ children }) => {
  return (
    <nav
      className={`hidden md:backdrop-blur-3xl md:flex w-full items-center justify-center gap-x-4 py-2`}
    >
      {NAVLINKS.map((link) => (
        <a
          href={link.to}
          className={`text-fourth-color hover:text-primary-color hover:font-bold transition-all duration-300 cursor-pointer py-2 px-3 text-center text-base font-semibold`}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNavbar;
