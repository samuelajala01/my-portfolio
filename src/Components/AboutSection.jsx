import "../styles/AboutSection.css";
import TagCloud from "TagCloud";
import { useEffect } from "react";

const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "JavaScript",
        "CSS",
        "HTML",
        "Github",
        "React",
        "Python",
        "git",
        "Tailwind",
        "Node.js",
      ];

      const options = {
        radius: 250,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  });
  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

const AboutSection = () => {
  return (
    <section id="about">
      <h2>A little about me</h2>
      <div className="info">
        <div className="info-text">
          <p>
            If you're looking for a frontend developer to convert designs to
            code, you've found him. I have worked with frontend languages and
            technologies for some time. My main goals are making your website
            look beautiful and easy to use. If you need a website just contact
            me.
          </p>
        </div>
        <div className="info-text-2">
          <TextSphere />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
