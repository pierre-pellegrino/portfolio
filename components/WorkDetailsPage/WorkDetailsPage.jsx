import Head from 'next/head'
import Image from "next/image";
import TagsDisplay from './TagsDisplay/TagsDisplay';
import {
  cusLink,
} from 'components/HomeTitle/Navbar/navbar.module.scss';
import {
  workWrapper,
  paragraph,
  paragraphPicture,
  paragraphText,
  tagsWrapper,
  projectLink,
  paragraphPicturesWrapper,
  notableFeatures,
} from '/styles/work_detail.module.scss';


const WorkDetailsPage = ({project}) => {
  const {
    name, 
    description, 
    picture, 
    role, 
    detailImg,
    link,
    tags,
    detailDesc,
    features
  } = project;

  return (
    <>
    <Head>
      <title>{name} | Front-End Developer</title>
      <meta name="description" content={`${name} project detailed on Pierre Pellegrino's portfolio`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={workWrapper}>
    
    <h1>{name}</h1>
    {tags && (
      <div className={tagsWrapper}>
        <TagsDisplay tags={tags} />
      </div>
    )}

    {link ?
      (
      <>
        <p className={projectLink}>
          website:
          <a className={cusLink} href={`${link}`} target="_blank" rel="noreferrer">{name}</a>
        </p>
      </>
      ) :
      <p className={projectLink}>website: N/A</p>
    }

    <div className={paragraph}>
      <div className={paragraphText}>
        <div  
          dangerouslySetInnerHTML={{__html: detailDesc[0]}}
        />

        <div className={notableFeatures}>
          <p>Notable features :</p>
          <ul>
            {features.map((feature, i) => {
              return (
                <>
                
                <li key={i}> <span> {i+1} </span> {feature} </li>
                </>
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