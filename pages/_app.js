import '../styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import Head from "next/head";
import { useAtom } from 'jotai';
import { lightTheme } from 'store';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useAtom(lightTheme);

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
        <meta name="theme-color" content={`${theme ? "#DBDBDB" : "#1D1D1D" }`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);
