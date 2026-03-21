import { Routes, Route, Navigate } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
