import { HashRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import "./App.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand" style={{ textDecoration: "none", color: "var(--ink)" }}>P.H.k</Link>
      <div className="nav__links">
        <Link to="/" className="nav__link">Projects</Link>
        <Link to="/about" className="nav__link">About</Link>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="nav__link nav__link--cta">
          Resume ↓
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__text">© 2026 Pranay [HK] · SYDNEY, AU</span>
      <div className="footer__links">
        <a href="https://github.com/barni-os" target="_blank" rel="noopener noreferrer" className="card__link">GitHub →</a>
        <a href="https://linkedin.com/in/phk04" target="_blank" rel="noopener noreferrer" className="card__link">LinkedIn →</a>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <div className="page">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/project/:id" element={<Layout><ProjectPage /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </HashRouter>
  );
}

export default App;