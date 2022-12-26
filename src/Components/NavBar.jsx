import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <span className="logo">SAT</span>
        <span className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
          E
        </span>
      </nav>
      {isOpen && (
        <div className="nav_container">
          <ul className="nav_list_container">
            <li>
              <Link to="/" onClick={() => setIsOpen(!isOpen)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(!isOpen)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(!isOpen)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
