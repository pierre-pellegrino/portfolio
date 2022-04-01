import React, { useEffect} from 'react';
import {
  sliderSwitch,
  slider,
  round
} from './themeswitcher.module.scss';
import {useAtom} from 'jotai';
import {lightTheme} from 'store.js';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useAtom(lightTheme);

  const handleThemeSwitch = () => {
    localStorage.setItem("pp-theme", !theme);
    setTheme(!theme);
  }

  useEffect(() => {
    if (localStorage.getItem("pp-theme") === "true") {
      setTheme(true);
    }
    else {
      setTheme(false);
    }
  }, [])

  return (
    <label className={sliderSwitch}>
      <input type="checkbox" onChange={() => handleThemeSwitch()} checked={theme}/>
      <span className={`${slider} ${round}`}></span>
    </label>
  );
};

export default ThemeSwitcher;