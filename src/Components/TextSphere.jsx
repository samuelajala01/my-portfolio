import { useEffect } from "react";
// import TagCloud from "@frank-mayer/react-tag-cloud";
import TagCloud from "TagCloud";

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
        "TypeScript",
        "Python",
        "figma",
        "SEO",
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
  }, []);

  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphere;
