import { useContext, useState } from "preact/hooks";

import { TiWeatherSunny } from "react-icons/ti";
import { HiMoon } from "react-icons/hi";
// import darkContext from "../../context/darkContext";

const initialPositionRight =
  JSON.parse(localStorage.getItem("darkMode")) ?? true;

const DarkMode = () => {
  const [positionRight, setPositionRight] = useState(initialPositionRight);
  const { handleTheme } = useContext(darkContext);

  const handlePosition = () => {
    handleTheme();
    setPositionRight(!positionRight);
  };

  return (
    <button
      className={`bg-secondary-color items-center w-16 rounded-3xl h-4 mr-8`}
      onClick={handlePosition}
    >
      <aside
        className={`h-full w-1/2 flex items-center transition-transform duration-300 ${
          positionRight ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {positionRight ? (
          <HiMoon
            size="175%"
            color="#e5e7eb"
            className="rounded-full w-full bg-third-color"
          />
        ) : (
          <TiWeatherSunny
            size="175%"
            color="yellow"
            className="rounded-full w-full bg-third-color "
          />
        )}
      </aside>
    </button>
  );
};

export default DarkMode;
