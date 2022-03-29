import React from 'react';
import {
  nav,
} from "./navbar.module.scss";

const Navbar = ({cv, work}) => {
  const handleScrollWork = () => {
    window.scroll(window.innerWidth,0)
  }

  return (
    <nav className={nav}>
      <a href="#cv">{cv}</a>
      <a href="#work" onClick={() => handleScrollWork()}>{work}</a>
    </nav>
  );
};

export default Navbar;