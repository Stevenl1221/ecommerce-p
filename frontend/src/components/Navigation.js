import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", setFixed);
  return (
    <nav className={scrolled ? "navbar fixed" : "navbar"}>
      <ul>
        <li>
          <NavLink to="/home">
            <img
              src={
                scrolled ? "Guardian-logo-dark.png" : "Guardian-logo-white.png"
              }
              alt="Guardian-logo-dark"
              className="logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">Insurance</NavLink>
        </li>
        <li>
          <NavLink to="/account">API Practice</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Resources</NavLink>
        </li>
        <li>
          <NavLink to="/signin">About us</NavLink>
        </li>
        <li>
          <NavLink to="/signin">I am...</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
