import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

createRoot(document.getElementById("root")!).render(
  <ActiveSectionProvider>
    <App />
  </ActiveSectionProvider>
);
