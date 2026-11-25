import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

document.documentElement.classList.add("js");

window.addEventListener("error", () => {
  document.documentElement.classList.remove("js");
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
