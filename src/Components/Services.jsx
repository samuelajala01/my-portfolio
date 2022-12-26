import webdev from "../assets/Images/website.png";
import apidev from "../assets/Images/debug.png";
import Service from "./Service";

const Services = () => {
  return (
    <section id="services">
      <h2>My services🚀</h2>
      <div class="services-container">
        <Service title="web development" src={webdev}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          rerum aperiam voluptatem cum dolorum odit sit. Sit, aspernatur.
          Laboriosam ducimus aliquam sit? Eligendi eum beatae assumenda
          pariatur, nisi officiis tempore!
        </Service>
        <Service title="API development" src={apidev}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          rerum aperiam voluptatem cum dolorum odit sit. Sit, aspernatur.
          Laboriosam ducimus aliquam sit? Eligendi eum beatae assumenda
          pariatur, nisi officiis tempore!
        </Service>
        <Service title="Bug fixes" src={webdev}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          rerum aperiam voluptatem cum dolorum odit sit. Sit, aspernatur.
          Laboriosam ducimus aliquam sit? Eligendi eum beatae assumenda
          pariatur, nisi officiis tempore!
        </Service>
      </div>
    </section>
  );
};

export default Services;
