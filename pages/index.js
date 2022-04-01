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

export default function Home(props) {
  const { t } = useTranslation('common');
  const [theme, setTheme] = useAtom(lightTheme);
  const handleKeyDown = (e) => {
    e.preventDefault();
    e.key === "ArrowRight" && window.scroll(window.innerWidth, 0);
    e.key === "ArrowLeft" && window.scroll(0,0);
    e.key === "ArrowDown" && window.scroll(0, window.innerHeight);
    e.key === "ArrowUp" && window.scroll(0, 0);
  }

  return (
    <>
    <div className={`${globalWrapper} ${theme && light}`} tabIndex="0" onKeyDown={(e) => handleKeyDown(e)}>
      <Head>
        <title>{t('h3')} | Pierre Pellegrino </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeTitle}>
          <Navbar cv={t('cv')} work={t('work')}/>
          <HomeTitle h3={t('h3')}/>
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