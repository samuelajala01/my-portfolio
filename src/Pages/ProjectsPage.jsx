import Project from "../Components/Project";
import weatherapp from "../assets/Images/weather-app.png";
import loancalc from "../assets/Images/weather-app.png";
import todolist from "../assets/Images/todo-list-app.png";
import stt from "../assets/Images/speech-to-text.png";
import indecision from "../assets/Images/indecision app.png";
import shopbeta from "../assets/Images/shopping-app.png";

const ProjectsPage = () => {
  return (
    <section id="projects">
      <h2>Some of my works</h2>
      <div className="projects-container">
        <Project
          title="Metabnb site"
          description="A landing page of a metabnb site clone built during my HNG Internship"
          alt="Hero section Image of metabnb landing page clone"
        />
        <Project
          title="ShopBeta"
          description="An online shopping app that lets you create a list of products to
        buy and marks the purchased."
          alt="image of shopping app site"
          src={shopbeta}
          live_link="https://samuelajala01.github.io/shopbeta/"
          code_link="https://github.com/samuelajala01/shopbeta"
        />
        <div className="project">
          <div class="img-div">
            <img
              src={weatherapp}
              class="project-img"
              alt="image of weather app site"
            />
          </div>
          <div class="project-info">
            <p class="project-title">Weather App</p>
            <p class="project-text">
              A simple weather app that uses an API to show real-time weather
              info about a city and its local time.
            </p>
            <br />
            <p class="tech-div">
              <ul class="list-inline">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
            </p>
            <div class="btn-div">
              <button class="btn-1">
                <a href="https://xamy-weather-app.netlify.app/">Live</a>
              </button>
              <button class="btn-2">
                <a href="https://github.com/samuelajala01/my-weather-app">
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div class="img-div">
            <img src={loancalc} class="project-img" alt="image of Loango" />
          </div>
          <div class="project-info">
            <p class="project-title">Loan calculator</p>
            <p class="project-text">
              A simple useful web calculator that calculates how much to pay
              depending on your time frame.
            </p>
            <br />
            <p class="tech-div">
              <ul class="list-inline">
                <li>HTML5</li>
                <li>API</li>
                <li>JAVASCRIPT</li>
              </ul>
            </p>
            <div class="btn-div">
              <button class="btn-1">
                <a href="https://loan-calculator01.netlify.app/">Live</a>
              </button>
              <button class="btn-2">
                <a href="https://github.com/samuelajala01/loango">Code</a>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div class="img-div">
            <img
              src={todolist}
              class="project-img"
              alt=" A picture showing Samuel Ajala's todo list app"
            />
          </div>
          <div class="project-info">
            <p class="project-title">Todo list App</p>
            <p class="project-text">
              A simple CRUD web app to increase productivity
            </p>
            <br />
            <br />
            <p class="tech-div">
              <ul class="list-inline">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
            </p>
            <div class="btn-div">
              <button class="btn-1">
                <a href="https://xamy-js-todo.netlify.app/">Live</a>
              </button>
              <button class="btn-2">
                <a href="https://github.com/samuelajala01/JS-Todo-app">Code</a>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div class="img-div">
            <img
              src={indecision}
              class="project-img"
              alt="an image showing the indecision app."
            />
          </div>
          <div class="project-info">
            <p class="project-title">Indecision</p>
            <p class="project-text">
              It helps you decide what to do based on interests
            </p>
            <br />
            <br />
            <p class="tech-div">
              <ul class="list-inline">
                <li>HTML5</li>
                <li>CSS</li>
                <li>REACT</li>
              </ul>
            </p>
            <div class="btn-div">
              <button class="btn-1">
                <a href="https://indecision01.netlify.app/">Live</a>
              </button>
              <button class="btn-2">
                <a href="https://github.com/samuelajala01/indecision-app">
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div class="img-div">
            <img
              src={stt}
              class="project-img"
              alt="an image showing speech to text site."
            />
          </div>
          <div class="project-info">
            <p class="project-title">Speech to text App</p>
            <p class="project-text">
              A web app that converts spoken words to text that can be copied
              and/or edited.
            </p>
            <br />
            <br />
            <p class="tech-div">
              <ul class="list-inline">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
            </p>
            <div class="btn-div">
              <button class="btn-1">
                <a href="https://samuelajala01.github.io/Speech-to-text/">
                  Live
                </a>
              </button>
              <button class="btn-2">
                <a href="https://github.com/samuelajala01/Speech-to-text">
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
