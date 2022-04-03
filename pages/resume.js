import Head from 'next/head'
import ResumeComponent from 'components/Resume'
import {
  resume,
  light
} from "components/Resume/styles/variables.module.scss";
import {useAtom} from 'jotai';
import {lightTheme} from 'store.js';

export default function Resume() {
  const [theme] = useAtom(lightTheme);
  return (
    <>
      <Head>
        <title> Resume | Pierre Pellegrino </title>
        <meta name="description" content="Welcome on my portfolio. My name is Pierre Pellegrino and I am a Front-End Developer. This is my resume."/>
      </Head>
      <div className={`${resume} ${theme && light}`}>
        <ResumeComponent />
      </div>
    </>
  )
}
