import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import SidebarProvider from "./Projects/SimplePortfolio/Provider/SidebarProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // ✅ CORRECT (main.tsx or App.tsx)
  <BrowserRouter>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </BrowserRouter>
);
