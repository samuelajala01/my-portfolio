const Project = (props) => {
  return (
    <div className="project">
      <div className="img-div">
        <img src={props.img_src} className="project-img" alt={props.img_alt} />
      </div>
      <div className="project-info">
        <p className="project-title">{props.title}</p>
        <p className="project-text">{props.description}</p>
        <br />
        <div className="tech-div">
          <ul className="list-inline">
            <li>HTML5</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>
        <div className="btn-div">
          <button className="btn-1">
            <a href={props.live_link}>Live</a>
          </button>
          <button className="btn-2">
            <a href={props.code_link}>Code</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
