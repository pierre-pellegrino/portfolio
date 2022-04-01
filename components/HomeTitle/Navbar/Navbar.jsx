import React from 'react';
import {
  nav,
  toggleSwitch
} from "./navbar.module.scss";
import Link from 'next/link';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

const Navbar = ({cv, work}) => {
  const handleScroll = (x,y) => {
    window.scroll(x,y)
  }

  return (
    <nav className={nav}>
      <div className={toggleSwitch}>
        <ThemeSwitcher />
      </div>
      <Link href="/resume">
        <a>{cv}</a>
      </Link>
      <a onClick={() => handleScroll(window.innerWidth,0)}>{work}</a>
    </nav>
  );
};

export default Navbar;