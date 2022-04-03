import Head from 'next/head'
import HomeTitle from '../components/HomeTitle/HomeTitle'
import Navbar from '../components/HomeTitle/Navbar/Navbar'
import Work from '../components/Work/Work'
import {
  globalWrapper,
  homeTitle,
  light
} from '/styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import { lightTheme } from 'store';
import ContactMe from "components/ContactMe/ContactMe";
import { isMobile } from 'react-device-detect';

export default function Home(props) {

  const { t } = useTranslation('common');
  const [theme, setTheme] = useAtom(lightTheme);
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        window.scroll(window.innerWidth, 0);
        break;
      case 'ArrowLeft':
        window.scroll(0, 0);
        e.preventDefault();
        break;
    }
  }
  return (
    <>
    <div className={`${globalWrapper} ${theme && light}`} tabIndex="0" onKeyDown={(e) => handleKeyDown(e)}>
      <Head>
        <title>Portfolio | Pierre Pellegrino </title>
        <meta name="description" content="Welcome on my portfolio. My name is Pierre Pellegrino, I am a Front-End Developer and Javascript lover."/>
        <link rel="icon" href="/favicon.svg" />
        {isMobile && <style>html, body {`{overflow: hidden;}`}</style>}
      </Head>
      <div className={homeTitle}>
          <Navbar cv={t('cv')} work={t('work')} language={t('language')} mobile={isMobile}/>
          <HomeTitle h3={t('h3')} subtext={t('subtitle')}/>
          <ContactMe mobile={isMobile}/>
      </div>
      <div>
        <Work locale={props._nextI18Next.initialLocale}/>
      </div>
    </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}