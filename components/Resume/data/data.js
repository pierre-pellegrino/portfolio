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
      content: `<a href="mailto:pierre.pellegrino.dev@gmail.com" rel="noreferrer" target="_blank">pierre.pellegrino.dev@gmail.com</a>`
    },
    {
      name: `address`,
      icon: <LocationIcon />,
      content: `36 avenue Paul Arène, 06000 NICE`
    },
    {
      name: `github`,
      icon: <GithubIcon />,
      content: `<a href="https://github.com/pierre-pellegrino" rel="noreferrer" target="_blank">pierre-pellegrino</a>`
    }
  ],
  profile: {
    title: `profil`,
    content: [
      `Développeur web orienté Front-End avec notamment ReactJS/NextJS, j’ai le sens de l’analyse du besoin client et de l’expérience en gestion d’équipe. Motivé par l’acquisition permanente de nouvelles connaissances, je suis à la recherche d’une entreprise dans laquelle m’épanouir sur le long-terme.`
    ]
  },
  skills: {
    title: `compétences`,
    content: [
      {
        title: `Développement`,
        content: [
          `HTML`,
          `CSS / Sass`,
          `Javascript / ReactJS / NextJS`,
          `Ruby / Ruby on Rails`,
          `Bases de données (SQLite, PostgreSQL)`,
          `Jest`,
          `Git / Git Flow / Github`,
          `Méthode agile`
        ]
      },
      {
        title: `Relation client et Management`,
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
          `Titulaire du permis B - Véhiculé`
        ]
      }
    ]
  },
  experience: {
    title: `expériences professionnelles`,
    content: [
      {
        title: `Snipshare`,
        date: `mars 2022`,
        content: [
          `Création d'un réseau social pensé pour les développeurs`, 
          `Front-End : React, Next, Sass`, 
          `Back-End : API Ruby on Rails, PostgreSQL`,
        ],
        hidden: false
      },
      {
        title: `immolib`,
        date: `décembre 2021`,
        content: [
          `Création d'un site de gestion de visites immobilières et de collecte de dossiers candidats`, 
          `Front-End : HTML, ERB, Javascript/Ajax, Sass`, 
          `Back-End : Ruby on Rails, PostgreSQL`,
        ],
        hidden: false
      },
      {
        title: `Responsable commercial`,
        date: `mars 2019 - février 2021`,
        content: [
          `Réseau Club Bouygues Télécom`,
        ],
        hidden: false
      },
      {
        title: `Conseiller Commercial`,
        date: `novembre 2016 - mars 2019`,
        content: [
          `Réseau Club Bouygues Télécom`
        ],
        hidden: true
      },
      {
        title: `Conseiller Commercial`,
        date: `novembre 2015 - août 2016`,
        content: [
          `Espace SFR`
        ],
        hidden: true
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
      `Sport`,
      `Films, séries`,
      `Jeux vidéo`,
    ]
  },
};

export default data;