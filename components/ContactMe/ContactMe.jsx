import React from 'react';
import {
  contactWrapper,
  searchbarPlaceholder
} from "./contact.module.scss";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from "components/Icons";
const ContactMe = ({mobile}) => {
  return (
    <>
    <div className={contactWrapper}>
      <a href="https://www.linkedin.com/in/pierre-pellegrino-aa1280132/" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
      <a href="https://github.com/pierre-pellegrino" rel="noreferrer" target="_blank"><GithubIcon /></a>
      <a href="mailto:pierre.pellegrino.dev@gmail.com" rel="noreferrer" target="_blank"><MailIcon /></a>
    </div>
    {mobile && <div className={searchbarPlaceholder}></div>}
    </>
  );
};

export default ContactMe;