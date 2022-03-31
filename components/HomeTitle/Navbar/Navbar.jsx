import React from 'react';
import {
  nav,
} from "./navbar.module.scss";

const Navbar = ({cv, work}) => {
  const handleScroll = (x,y) => {
    window.scroll(x,y)
  }

  return (
    <nav className={nav}>
      <a onClick={() => handleScroll(0,window.innerHeight)}>{cv}</a>
      <a onClick={() => handleScroll(window.innerWidth,0)}>{work}</a>
    </nav>
  );
};

export default Navbar;