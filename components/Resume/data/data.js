import {GithubIcon, PhoneIcon, MailIcon, LocationIcon} from "components/Icons";

const data = {
  personal_informations: [
    {
      name: `phone`,
      icon: <PhoneIcon />,
      content: `+33 6 99 46 14 86`
    },
    {
      name: `email`,
      icon: <MailIcon />,
      content: `pierre.pellegrino@laposte.net`
    },
    {
      name: `address`,
      icon: <LocationIcon />,
      content: `36 avenue Paul Arène, 06000 NICE`
    },
    {
      name: `github`,
      icon: <GithubIcon />,
      content: `pierre-pellegrino`
    }
  ],
  profile: {
    title: `profil`,
    content: [
      `Fort de mes connaissances concernant les nouvelles technologies et de mon expérience dans le commerce et la relation clientèle, je possède les capacités d'adaptation et la motivation nécessaires pour mener à bien les missions qui me sont confiées.`
    ]
  },
  skills: {
    title: `compétences`,
    content: [
      {
        title: `Informatiques`,
        content: [
          `HTML`,
          `CSS / Sass`,
          `Javascript / ReactJS / NextJS`,
          `Ruby / Ruby On Rails`,
          `Bases de données (SQLite, PostgreSQL)`,
          `Méthode agile / Design Patterns`
        ]
      },
      {
        title: `Commerciales et Managériales`,
        content: [
          `Identification du besoin client`,
          `Gestion d'une équipe`,
          `Organisation d'une structure`
        ]
      },
      {
        title: `Diverses`,
        content: [
          `Maîtrise de l'anglais`,
          `Titulaire du permis B`
        ]
      }
    ]
  },
  experience: {
    title: `expérience professionnelle`,
    content: [
      {
        title: `Responsable Point de vente`,
        date: `mars 2019 - février 2021`,
        content: [
          `Réseau Club Bouygues Télécom`
        ]
      },
      {
        title: `Conseiller Commercial`,
        date: `novembre 2016 - mars 2019`,
        content: [
          `Réseau Club Bouygues Télécom`
        ]
      },
      {
        title: `Conseiller Commercial`,
        date: `novembre 2015 - août 2016`,
        content: [
          `Espace SFR`
        ]
      }
    ]
  },
  education: {
    title: `formation`,
    content: [
      {
        title: `The Hacking Project`,
        date: `septembre 2021 - mars 2022`,
        content: [
          `Formation intensive Full-Stack, félicitations du jury`
        ]
      },
      {
        title: `BTS IRIS`,
        date: `2011 - 2013`,
        content: [
          `LGT Les Eucalyptus`,
          `Informatique et Réseaux pour l'Industrie et les Services techniques`
        ]
      },
      {
        title: `Baccalauréat scientifique`,
        date: `2008 - 2011`,
        content: [
          `Lycée Jacques Audiberti`
        ]
      }
    ]
  },
  hobbies: {
    title: `loisirs`,
    content: [
      `Nouvelles Technologies`,
      `Sport`,
      `Films, séries`,
      `Jeux vidéo`,
    ]
  },
};

export default data;