import React, { useState, useEffect } from "react";
import bitmoji from "../assets/Images/my-bitmoji.png";

const HomeSection = () => {
  const [words, setWords] = useState([
    "Frontend Developer",
    "Backend Developer",
  ]);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setCurrentWord(words[index]);
      index = (index + 1) % words.length;
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [words]);

  return (
    <>
      <section id="home">
        <div className="main">
          <div className="home-1">
            <h1 className=" h1 animate__animated animate__fadeInLeft">
              Hi, <br />
              I'm Samuel,
              <br />a <span className="techie">Techie</span>
            </h1>
            <p>{currentWord}</p>
            <div className="icons animate__animated animate__fadeInUp">
              <a href="https://github.com/samuelajala01/">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/samuelajala01/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/cy63rx">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/samuelajala01/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="home-2">
            <img src={bitmoji} alt="Image of Samuel Ajala" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
