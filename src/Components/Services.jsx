import webdev from "../assets/Images/website.png";
import apidev from "../assets/Images/debug.png";
import Service from "./Service";

const Services = () => {
  return (
    <section id="services">
      <h2>My services🚀</h2>
      <div class="services-container">
        <Service title="web development" src={webdev} />
        <Service title="API development" src={apidev} />
        <div class="service">
          <img class="cover-img" src="./images/images.png" alt="" />
          <h4>Code Review</h4>
          <button>
            <a href="#contact">Hire Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
