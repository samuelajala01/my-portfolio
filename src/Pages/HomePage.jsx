import ContactPage from "./ContactPage";
import bitmoji from "../assets/Images/my-bitmoji.png";
import Services from "../Components/Services";
import AboutSection from "../Components/AboutSection";
import ProjectSection from "../Components/ProjectSection";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section id="home">
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
      <AboutSection />
      <ProjectSection />
      <Services />
      <ContactPage />
      <Footer />
    </>
  );
};

export default HomePage;
