import { Route, Routes } from "react-router-dom";
import AboutPage from "./Projects/SimplePortfolio/Features/sections/AboutPage";
import CertificationsPage from "./Projects/SimplePortfolio/Features/sections/CertificationsPage";
import ErrorPage from "./Projects/SimplePortfolio/Features/sections/Error";
import GitHubStatsPage from "./Projects/SimplePortfolio/Features/sections/GitHubStatsPage";
import HomePage from "./Projects/SimplePortfolio/Features/sections/HomePage";
import MusicPage from "./Projects/SimplePortfolio/Features/sections/MusicPage";
import ProjectsPage from "./Projects/SimplePortfolio/Features/sections/ProjectsPage";
import ResourcesPage from "./Projects/SimplePortfolio/Features/sections/ResourcesPage";
import SkillsPage from "./Projects/SimplePortfolio/Features/sections/SkillsPage";
import Layout from "./Projects/SimplePortfolio/Provider/Layout/Layout";
import SidebarProvider from "./Projects/SimplePortfolio/Provider/SidebarProvider";
import { ThemeProvider } from "./Projects/SimplePortfolio/Provider/ThemeProvider";

const App = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
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
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </SidebarProvider>
    </div>
  );
};

export default App;
