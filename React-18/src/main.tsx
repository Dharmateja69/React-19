import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // ✅ CORRECT (main.tsx or App.tsx)

  <App />
);
