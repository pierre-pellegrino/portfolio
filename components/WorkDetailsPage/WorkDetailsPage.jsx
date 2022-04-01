import Head from 'next/head'
import Image from "next/image";
import TagsDisplay from './TagsDisplay/TagsDisplay';
import Arrow from 'components//Arrow/Arrow';
import {
  cusLink,
} from 'components/HomeTitle/Navbar/navbar.module.scss';
import {
  workWrapper,
  paragraph,
  paragraphPicture,
  paragraphText,
  tagsWrapper,
  paragraphPicturesWrapper,
  notableFeatures,
  variousProjectLink,
  leftArrow,
  iconsWrapper,
  light
} from '/styles/work_detail.module.scss';
import { GithubIcon, WorldIcon } from '../Icons';
import { useAtom } from 'jotai';
import { lightTheme } from 'store';
import Link from "next/link";

const WorkDetailsPage = ({project}) => {
  const {
    name, 
    detailImg,
    link,
    github_link,
    tags,
    detailDesc,
    features,
    multiple
  } = project;
  const [theme] = useAtom(lightTheme);

  return (
    <>
    <Head>
      <title>{name} | Pierre Pellegrino</title>
      <meta name="description" content={`${name} project detailed on Pierre Pellegrino's portfolio`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={`${theme && light} ${workWrapper}`}>
    
      <h1>{name}</h1>
      {tags && (
        <div className={tagsWrapper}>
          <TagsDisplay tags={tags} />
        </div>
      )}

      <div className={iconsWrapper}>
        {link && <a className={cusLink} href={`${link}`} target="_blank" rel="noreferrer"><WorldIcon /></a> }
        {github_link && <a className={cusLink} href={`${github_link}`} target="_blank" rel="noreferrer"><GithubIcon /></a> }
      </div>

      <div className={paragraph}>
        <div className={paragraphText}>
          <div className={leftArrow} style={{transform: "rotate(180deg)"}}>
            <Link href="/">
              <a><Arrow /></a>
            </Link>
          </div>
          <div  
            dangerouslySetInnerHTML={{__html: detailDesc}}
          />

          <div className={notableFeatures}>
            {multiple ? <p>Projects demos :</p> : <p>Notable features :</p>}
            <ul>
              {features.map((feature, i) => {
                return (
                  <li key={i}> 
                    <span> 
                      {i+1} 
                    </span> 
                    {multiple ? <div className={variousProjectLink} dangerouslySetInnerHTML={{__html: feature}} /> : feature} 
                  </li>
                );
              })}
            </ul>
          </div>
          
        </div>

        <div className={paragraphPicturesWrapper}>
          {detailImg.map((img,i) => {
            return (
              <div className={paragraphPicture} key={i}>
                <Image
                  src={`/images/${img}`}
                  alt="work preview picture"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            )
          })}
        </div>
      </div>  
    </div>
  </>
  );
};

export default WorkDetailsPage;