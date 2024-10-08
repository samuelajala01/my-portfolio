import "../styles/AboutSection.css";
import TypeScript from "../assets/Images/tools svg/Typescript";
import Figma from "../assets/Images/tools svg/Figma";
import Nodejs from "../assets/Images/tools svg/Node";

const AboutSection = () => {
  return (
    <section id="about">
      <h2>A little about me</h2>
      <div className="info">
        <div className="info-text">
          <p>
            As a frontend developer, I specialise in web app development and
            websites. I'm committed to delivering top-notch solutions that are
            both functional and beautiful. If you're looking for a talented and
            experienced web developer to bring your website or web app to life,
            let's connect and make it happen. <br />
            <br />I specialise in web app development and websites. I'm
            committed to delivering top-notch solutions that are both functional
            and beautiful.
          </p>
        </div>
        <div className="info-text-2">
          <h2>Tech stack</h2>
          <TypeScript />
          <Figma />
          <Nodejs />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
