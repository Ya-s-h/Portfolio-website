import { Routes, Route, Navigate } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <ResponsiveAppBar
        Name="Yash Aggarwal"
        navbarItems={["Home", "About", "Projects", "Resume"]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Placeholder routes for future pages */}
        <Route
          path="/projects"
          element={<div>Projects Page - Coming Soon</div>}
        />
        <Route path="/resume" element={<div>Resume Page - Coming Soon</div>} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
