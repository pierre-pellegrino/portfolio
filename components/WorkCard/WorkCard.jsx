import React from 'react';
import {
  workCard,
  btn,
  workDetails,
} from "./workcard.module.scss";
import Image from "next/image";
import Link from "next/link";

const WorkCard = ({project}) => {
  const { name, description, role, picture, slug } = project;
  return (
    <div className={workCard}>
      <Image
        src={`/images/${picture}`}
        alt="work preview picture"
        layout="fill"
        objectFit="cover"
        objectPosition="center -120px"
      />
      <h3>{name}</h3>
      <p>{role}</p>

        <p className={workDetails}>{description}</p>
        <Link href={`/${slug}`} className={workDetails}>
          <a className={`${workDetails} ${btn}`}>See more</a>
        </Link>
    </div>
  );
};

export default WorkCard;