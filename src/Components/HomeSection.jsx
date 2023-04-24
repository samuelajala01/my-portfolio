import React, { useState, useEffect } from "react";
import bitmoji from "../assets/Images/my-bitmoji.png";
import "../styles/HomeSection.css";

const HomeSection = () => {
  const [words, setWords] = useState([
    "Frontend Developer",
    "Technical Writer",
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
            <div className="hero_head_container animate__animated animate__fadeInLeft">
              <p className="my_name_is"> Hi, my name is</p>
              <h1 className="name">Samuel Ajala</h1>
              <span className="techie">Techie.</span>
            </div>
            <p className="home_title">{currentWord}</p>

            {/* <button className="blog_btn"> */}
            <a href="" className="blog_btn_link">
              Visit my blog!
            </a>
            {/* </button> */}

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
            <img
              src={bitmoji}
              className="bitmoji"
              alt="Image of Samuel Ajala"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
