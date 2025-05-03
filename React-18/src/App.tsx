import { Route, Routes } from "react-router-dom";

// Pages
import AboutPage from "./Projects/SimplePortfolio/Features/sections/AboutPage";
import CertificationsPage from "./Projects/SimplePortfolio/Features/sections/CertificationsPage";
import ErrorPage from "./Projects/SimplePortfolio/Features/sections/Error";
import GitHubStatsPage from "./Projects/SimplePortfolio/Features/sections/GitHubStatsPage";
import HomePage from "./Projects/SimplePortfolio/Features/sections/HomePage";
import MusicPage from "./Projects/SimplePortfolio/Features/sections/MusicPage";
import ProjectsPage from "./Projects/SimplePortfolio/Features/sections/ProjectsPage";
import ResourcesPage from "./Projects/SimplePortfolio/Features/sections/ResourcesPage";

// Providers and Layout
import Acheivements from "./Projects/SimplePortfolio/Features/sections/Acheivements";
import Layout from "./Projects/SimplePortfolio/Provider/Layout/Layout";
import SidebarProvider from "./Projects/SimplePortfolio/Provider/SidebarProvider";
import { ThemeProvider } from "./Projects/SimplePortfolio/Provider/ThemeProvider";

const App = () => {
  return (
    <div className="flex-1 h-screen">
      <SidebarProvider>
        <ThemeProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/github" element={<GitHubStatsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/achievements" element={<Acheivements />} />
              <Route path="/*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </SidebarProvider>
    </div>
  );
};

export default App;
