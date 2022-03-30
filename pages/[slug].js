import { useTranslation } from 'next-i18next';
import works from "data/works-en.js";
import WorkDetailsPage from "components/WorkDetailsPage/WorkDetailsPage";

export default function Home({project}) {
  const { t } = useTranslation('common');

  return (
    <WorkDetailsPage project={project[0]}/>
  )
}

export async function getStaticPaths() {
  const paths = works.map(project => {
    console.log(project.slug)
    return {
      params: { slug: `${project.slug}`},
      locale: 'fr' 
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const project = works.filter(project => project.slug === params.slug);
  return {
    props: {
      project
    },
  };
}