import { render } from "preact";
import { App } from "./app";
import { MobileProvider } from "./context/mobileContext";
import "./index.css";

render(
  <MobileProvider>
    <App />
  </MobileProvider>,
  document.getElementById("app")
);
