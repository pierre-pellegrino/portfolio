import React from 'react';
import {
  workCard,
} from "./workcard.module.scss";
import Image from "next/image";

const WorkCard = () => {
  return (
    <div className={workCard}>
      <Image
        src="/images/snipshare_mockup.png"
        alt="work preview picture"
        layout="fill"
        objectFit="cover"
      />
      <h3> Snipshare </h3>
      <p>
        Front-End Developer
      </p>
      <p>
        Social network that allows users to share their own code snippets or browse those created by people.
      </p>
    </div>
  );
};

export default WorkCard;