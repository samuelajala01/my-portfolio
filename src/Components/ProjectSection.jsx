import Project from "./Project";
import weatherapp from "../assets/Images/weather-app.png";
import loancalc from "../assets/Images/weather-app.png";
import todolist from "../assets/Images/todo-list-app.png";
import stt from "../assets/Images/speech-to-text.png";
import indecision from "../assets/Images/indecision app.png";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2>Some of my works</h2>
      <div className="projects-container">
        <Project
          title="Metabnb site"
          description="A landing page of a metabnb site clone built during my HNG Internship"
          img_alt="Hero section Image of metabnb landing page clone"
          live_link="https://metabnb-clone.netlify.app"
          code_link="https://github.com/metabnb-clone"
        />
        <Project
          title="TextToSpeech"
          img_src={stt}
          img_alt="an image showing speech to text site."
          description=" A web app that converts spoken words to text that can be copied
              and/or edited."
          live_link="https://samuelajala01.github.io/Speech-to-text/"
          code_link="https://github.com/samuelajala01/Speech-to-text"
        />
        <Project
          title="Weather App"
          description="A simple weather app that uses an API to show real-time weather
        info about a city and its local time."
          img_alt="image of a weather app screen"
          img_src={weatherapp}
          live_link="https://xamy-weather-app.netlify.app/"
          code_link="https://github.com/samuelajala01/my-weather-app"
        />
        <Project
          title="LoanCalc"
          description="A simple useful web calculator that calculates how much to pay
              depending on your time frame."
          live_link="https://loan-calculator01.netlify.app/"
          code_link="https://github.com/samuelajala01/loango"
        />
        <Project
          title="TodoListApp"
          description=" A simple CRUD web app to increase productivity"
          img_alt=" A picture showing Samuel Ajala's todo list app"
          live_link="https://xamy-js-todo.netlify.app/"
          code_link="https://github.com/samuelajala01/JS-Todo-app"
        />
        <Project
          title="Indecision"
          description=" It helps you decide what to do based on interests"
          img_src={indecision}
          img_alt="an image showing the indecision app."
          live_link="https://indecision01.netlify.app/"
          code_link="https://github.com/samuelajala01/indecision-app"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
