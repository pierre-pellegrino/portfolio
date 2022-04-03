import Head from 'next/head'
import Work from '../components/Work/Work'
import {
  globalWrapper,
  light
} from '/styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import { lightTheme } from 'store';
import { isMobile } from 'react-device-detect';

export default function MyWork(props) {
  const { t } = useTranslation('common');
  const [theme, setTheme] = useAtom(lightTheme);
  
  return (
    <>
    <div className={`${globalWrapper} ${theme && light}`}>
      <Head>
        <title>My work | Pierre Pellegrino </title>
        <meta name="description" content="Pierre Pellegrino - You can access here to some of the work I've made so far." />
        {isMobile && <style>html, body {`{overflow: hidden;}`}</style>}
      </Head>
      <div>
        <Work locale={props._nextI18Next.initialLocale} mobile={true}/>
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