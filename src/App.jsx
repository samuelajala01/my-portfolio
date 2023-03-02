import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import NotFoundPage from "./Pages/NotFoundPage";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import FormResponsePage from "./Pages/FormResponsePage";
// ..

function App() {
  AOS.init();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/response" element={<FormResponsePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
