import React from 'react';
import {
  nav,
} from "./navbar.module.scss";
import Link from 'next/link';

const Navbar = ({cv, work}) => {
  const handleScroll = (x,y) => {
    window.scroll(x,y)
  }

  return (
    <nav className={nav}>
      <Link href="/resume">
        <a>{cv}</a>
      </Link>
      <a onClick={() => handleScroll(window.innerWidth,0)}>{work}</a>
    </nav>
  );
};

export default Navbar;