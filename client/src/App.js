import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllTools from "./pages/AllTools";
import Merge from "./pages/tools/Merge";

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-center gap-6 text-gray-700 fixed top-0 left-0 z-50">
        <Link to="/">Home</Link>
        <Link to="/all-tools">PDF Tools</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Push page content below fixed navbar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-tools" element={<AllTools />} />
          <Route path="/tools/merge" element={<Merge />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
