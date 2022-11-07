const navLinks = [
  {
    to: "#inicio",
    text: "Inicio",
  },
  {
    to: "#acerca",
    text: "Acerca",
  },
  {
    to: "#agenda",
    text: "Agenda",
  },
  {
    to: "#oradores",
    text: "Oradores",
  },
  {
    to: "#patrocinadores",
    text: "Patrocinadores",
  },
];

const NavBar = ({ className, sectionClass, setOpenHamburger }) => {
  return (
    <nav className={className}>
      <ul className={sectionClass}>
        {navLinks.map((link) => (
          <li>
            <a
              onClick={setOpenHamburger}
              href={link.to}
              className="hover:border-b-2 border-fourth-color transition-all duration-100"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
