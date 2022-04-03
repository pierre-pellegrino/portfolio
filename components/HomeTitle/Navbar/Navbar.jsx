import React from 'react';
import {
  nav,
  toggles
} from "./navbar.module.scss";
import Link from 'next/link';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';

const Navbar = ({cv, work, language, mobile}) => {
  const handleScroll = (x,y) => {
    window.scroll(x,y)
  }

  return (
    <nav className={nav}>
      <div className={toggles}>
        <ThemeSwitcher />
        <LanguageSwitcher lang={language} />
      </div>
      <Link href="/resume">
        <a>{cv}</a>
      </Link>

      {mobile ? (
        <Link href="/my-work">
          <a>{work}</a>
        </Link>
      ) : (
        <a onClick={() => handleScroll(window.innerWidth,0)}>{work}</a>
      )}
    </nav>
  );
};

export default Navbar;