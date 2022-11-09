import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export function App() {
  return (
    <div id="inicio" className="relative">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export const NAVLINKS = [
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
    to: "#sponsors",
    text: "Sponsors",
  },
];
