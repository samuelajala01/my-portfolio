const AboutPage = () => {
  return (
    <section id="about">
      <h2>A little about me</h2>
      <div className="info">
        <div className="info-text">
          <p>
            I'm currently in my first year studying Electronics and Computer
            Engineering. I got into tech in 2017 and have explored different
            areas. I have interests In Hardware tech and CyberSec.
          </p>
          <h3>Skills and Technologies</h3>
          <div className="skills-list">
            <div>
              <i className="fab fa-html5"></i>
              <br />
              <span>HTML5</span>{" "}
            </div>
            <div>
              <i className="fab fa-css3"></i>
              <br />
              <span>CSS3</span>
            </div>
            <div>
              <i className="fab fa-js"></i>
              <br />
              <span>JavaScript</span>
            </div>
            <div>
              <i className="fab fa-node-js"></i>
              <br />
              <span>Node.js</span>
            </div>
            <div>
              <i className="fab fa-php"></i>
              <br />
              <span>Php</span>
            </div>
            <div>
              <i className="fab fa-python"></i>
              <br />
              <span>Python</span>
            </div>
          </div>
        </div>
        <div className="info-img-div">
          <img
            src="../assets/Images/samuel-ajala.jpeg"
            className="info-img"
            alt="Image of Samuel Ajala"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
