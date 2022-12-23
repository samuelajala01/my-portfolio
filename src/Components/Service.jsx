const Service = (props) => {
  return (
    <div class="service">
      <img className="cover-img" src={props.src} alt="" />
      <h4>{props.title}</h4>
      <button>
        <a href="#contact">Hire Me</a>
      </button>
    </div>
  );
};

export default Service;
