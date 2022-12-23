import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";
import bitmoji from "../assets/Images/my-bitmoji.png";
import Services from "../Components/Services";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <div class="menu-list">
          <span class="menu-remove-bar">
            <i class="fas fa-times"></i>
          </span>
          <ul class="nav-bar-list">
            <li>
              <a href="#home" class="click-me">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="click-me">
                About
              </a>
            </li>
            <li>
              <a href="#projects" class="click-me">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" class="click-me">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" class="click-me">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <nav class="full-nav">
          <span class="logo">SAT</span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span class="menu-bar">
            <i class="fas fa-bars"></i>
          </span>
        </nav>
        <div class="main">
          <div class="home-1">
            <h1 class=" h1 animate__animated animate__fadeInLeft">
              Hi, <br />
              I'm Samuel,
              <br />a <span class="techie">Techie</span>
            </h1>
            <p>React x Node js Developer</p>
            <div class="icons animate__animated animate__fadeInUp">
              <a href="https://github.com/samuelajala01/">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/samuelajala01/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/xamy.dev">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/samuelajala01/">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="home-2">
            <img src={bitmoji} alt="Image of Samuel Ajala" />
          </div>
        </div>
      </section>
      <AboutPage />
      <ProjectsPage />
      <Services />
      <ContactPage />
    </>
  );
};

export default HomePage;
