import "../styles/AboutSection.css";
import TagCloud from "TagCloud";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        "figma",
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
// const TextSphere = () => {
//       const container = ".tagcloud";
//       const texts = [
//         "JavaScript",
//         "CSS",
//         "HTML",
//         "Github",
//         "React",
//         "Python",
//         "figma",
//         "git",
//         "Tailwind",
//         "Node.js",
//       ];

//       const options = {
//         radius: 250,
//         maxSpeed: "fast",
//         initSpeed: "fast",
//         keep: true,
//       };

//       TagCloud(container, texts, options);

//   return (
//     <>
//       <div className="text-sphere">
//         <span className="tagcloud"></span>
//       </div>
//     </>
//   );
// };

const AboutSection = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <section id="about">
      <h2>A little about me</h2>
      <div className="info">
        {path === "/" ? (
          <>
            <div className="info-text">
              <p>
                As a frontend developer, I specialise in web app development.
                I'm committed to delivering top-notch solutions that are both
                functional and beautiful. If you're looking for a talented and
                experienced web developer to bring your website or web app to
                life, let's connect and make it happen.
              </p>
            </div>
            <div className="info-text-2">
              <TextSphere />
            </div>
          </>
        ) : (
          <>
            <div className="info-text">
              <p>Backend dev</p>
            </div>
            <div className="info-text-2">
              <TextSphere />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
