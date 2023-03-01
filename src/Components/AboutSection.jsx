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
          <div className="info-img-div">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
