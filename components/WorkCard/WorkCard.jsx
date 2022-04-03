import React from 'react';
import {
  workCard,
  btn,
  workDetails,
  mobileCard
} from "./workcard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const WorkCard = ({project, mobile}) => {
  const { name, description, role, picture, slug } = project;
  const { t } = useTranslation('common');
  return (
    <div className={`${workCard} ${mobile && mobileCard}`}>
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
          <a className={`${workDetails} ${btn}`}>{t('workButton')}</a>
        </Link>
    </div>
  );
};

export default WorkCard;