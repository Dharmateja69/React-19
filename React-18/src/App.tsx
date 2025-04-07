import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeProvider from "./Projects/Advanceofcontextapi/components/ThemeSwitcher/ThemeProvider";
import Dashboard from "./Projects/Advanceofcontextapi/pages/Dashboard";
import Error from "./Projects/Advanceofcontextapi/pages/Error";
import Home from "./Projects/Advanceofcontextapi/pages/Home";
import Tutorials from "./Projects/Advanceofcontextapi/pages/Tutorials";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
