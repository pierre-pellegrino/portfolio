import React from 'react';
import {
  title
} from './languageswitcher.module.scss';
import Link from "next/link";

const LanguageSwitcher = ({lang}) => {
  const newLang = lang == "fr" ? "en" : "fr";
  const handleFavLanguage = () => {
    localStorage.setItem("pp-language", newLang)
  }

  return (
    <Link href="/" locale={newLang}>
      <a><p className={title} onClick={() => handleFavLanguage()}>{newLang}</p></a>
    </Link>
  );
};

export default LanguageSwitcher;