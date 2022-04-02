import '../styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import Head from "next/head";
import { useAtom } from 'jotai';
import { lightTheme } from 'store';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [_, setTheme] = useAtom(lightTheme);

  useEffect(() => {
    if (localStorage.getItem("pp-theme") === "true") {
      setTheme(true);
    }
    else {
      setTheme(false);
    }
  }, [])
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);
