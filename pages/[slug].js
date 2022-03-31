import { useTranslation } from 'next-i18next';
// import works from "data/works-en.js";
import worksen from "data/works-en.js";
import worksfr from "data/works-fr.js";
import WorkDetailsPage from "components/WorkDetailsPage/WorkDetailsPage";

export default function Home({project}) {
  const { t } = useTranslation('common');

  return (
    <WorkDetailsPage project={project[0]}/>
  )
}

export async function getStaticPaths() {
  const locales = ['fr', 'en'];

  const paths = worksen.map(project => {
    return {
      params: { slug: `${project.slug}`}
    }
  });
  const localesPaths = paths.flatMap(path => {
    return locales.map(locale => ({...path, locale}))
  })

  return {
    paths: localesPaths,
    fallback: false
  }
}

export async function getStaticProps({params, locale}) {
  const works = locale === "fr" ? worksfr : worksen;
  const project = works.filter(project => project.slug === params.slug);
  return {
    props: {
      project,
    },
  };
}