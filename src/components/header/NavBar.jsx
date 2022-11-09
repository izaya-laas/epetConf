import { NAVLINKS } from "../../app";

const NavBar = ({ className, sectionClass, setOpenHamburger }) => {
  return (
    <ul className={sectionClass}>
      {NAVLINKS.map((link) => (
        <li>
          <a
            onClick={setOpenHamburger}
            href={link.to}
            className="hover:border-b-2 border-fourth-color transition-all duration-100 font-bold"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
