import { useState } from "react";

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
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
