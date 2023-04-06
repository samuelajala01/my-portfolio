import { useEffect } from "react";
import TagCloud from "TagCloud";

const TextSphere2 = () => {
  useEffect(() => {
    return () => {
      const container2 = ".tagcloud2";
      const texts2 = [
        "JavaScript",
        "CSS",
        "HTML",
        "Github",
        "React",
        "Python",
        "figma",
        "SEO",
        "git",
        "Tailwind",
        "Node.js",
      ];

      const options2 = {
        radius: 220,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container2, texts2, options2);
    };
  }, []);

  return (
    <>
      <div className="text-sphere2">
        <span className="tagcloud2"></span>
      </div>
    </>
  );
};

export default TextSphere2;
