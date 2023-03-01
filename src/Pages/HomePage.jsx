import ContactPage from "./ContactPage";
import ProjectSection from "../Components/ProjectSection";
import HomeSection from "../Components/HomeSection";
import ServicesSection from "../Components/ServicesSection";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <ContactPage />
    </>
  );
};

export default HomePage;
