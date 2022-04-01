import React from 'react';
import {
  title
} from './languageswitcher.module.scss';
import Link from "next/link";

const LanguageSwitcher = ({lang}) => {

  return (
    <Link href="/" locale={`${lang == "fr" ? "en" : "fr"}`}>
      <a><p className={title}>{lang == "fr" ? "EN" : "FR"}</p></a>
    </Link>
  );
};

export default LanguageSwitcher;