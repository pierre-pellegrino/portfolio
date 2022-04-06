const works = [
  {
    id: 1,
    name: 'Snipshare',
    slug: 'snipshare',
    role: 'Développeur Front-End',
    description: 'Réseau social de partage de code informatique.',
    picture: 'snipshare_mockup.png',
    link: 'https://snipsha.re',
    github_link: 'https://github.com/pierre-pellegrino/sharincode',
    detailImg: ['snipshare_create.gif', 'snipshare_comment.gif', 'snipshare_themes.gif'],
    tags: [
      'Sass',
      'Javascript',
      'NextJS',
      'Ruby On Rails'
    ],
    detailDesc:'<p>Snipshare est un réseau social pensé pour les développeurs.<br /> Il vous permet de créer vos propres snippets de code dans plus de 60 langages de programmation différents. <br /><br /> Vous pouvez également voir les snippets des autres utilisateurs, les ajouter à vos favoris, les commenter, et les partager sur Twitter et Facebook.</p>',
    features: ['Éditeur de code intégré', 'Mise en forme du code', 'Scroll infini', 'Réagissez, commentez, partagez', 'Github OAuth'],
    featuresText: 'Caractéristiques principales :',
    linkText: 'Liens vers les projets :'
  },
  {
    id: 2,
    name: 'Immolib',
    slug: 'immolib',
    role: 'Développeur Front-End / Back-End',
    description: "immolib est un service qui aide les propriétaires à organiser leurs rendez-vous immobiliers et à récupérer les dossiers des candidats.",
    picture: 'immolib_mockup.png',
    link: 'https://immolib.herokuapp.com',
    github_link: 'https://github.com/pierre-pellegrino/Immolib',
    detailImg: ['immolib.png', 'immolib2.PNG', 'immolib3.PNG', 'immolib_form.gif'],
    tags: [
      'Ajax',
      'Sass',
      'Ruby On Rails'
    ],
    detailDesc:'<p>immolib aide les propriétaires à organiser leurs rendez-vous immobiliers et à récupérer les dossiers des candidats.<br /><br /> En tant que propriétaire, vous pouvez ajouter une annonce pour votre logement et créer un calendrier avec vos créneaux de disponibilité sur lesquels vos candidats s\'inscriront.<br /> Les candidats peuvent vous envoyer leur dossier d\'achat ou de location sur notre espace sécurisé.</p>',
    features: ['Calendrier intégré', 'Stockage sécurisé', 'Mails de relance automatiques', 'Paiement en ligne', 'Google OAuth'],
    featuresText: 'Caractéristiques principales :',
    linkText: 'Liens vers les projets :'
  },
  {
    id: 3,
    name: 'Immocoin',
    slug: 'immocoin',
    role: 'Développeur Front-End',
    description: "Marketplace immobilier.",
    picture: 'immocoin_mockup.png',
    link: 'https://immocoin.vercel.app',
    github_link: 'https://github.com/pierre-pellegrino/immocoin',
    detailImg: ['immocoin.png', 'immocoin3.png', 'immocoin4.png'],
    tags: [
      'Sass',
      'Javascript',
      'NextJS',
      'Ruby On Rails'
    ],
    detailDesc:'<p>immocoin est une plateforme de vente immobilière.<br /><br /> Après inscription, vous pourrez chercher parmi les différentes annonces ou bien créer la votre. Si une offre vous intéresse, vous pourrez contacter son propriétaire par mail via son espace profil. <br /><br /> Ce projet est un entraînement réalisé en une semaine.</p>',
    features: ['Authentification', 'Gestion d\'annonces'],
    featuresText: 'Caractéristiques principales :',
    linkText: 'Liens vers les projets :'
  },
  {
    id: 4,
    name: 'Projets annexes',
    slug: 'various-projects',
    role: 'Développeur Front-End / Intégrateur Web',
    description: "Présentation de quelques réalisations en intégration web.",
    picture: 'various_mockup.png',
    detailImg: ['various_crop.png', 'various2_crop.png', 'various3_crop.png', 'facebook_crop.png'],
    tags: [
      'Html',
      'CSS',
      'Javascript'
    ],
    detailDesc:'<p>Ces projets ont été réalisés pour me perfectionner en Front-End et intégration web. La plupart ont été effectués en quelques heures et sont des projets proposés par le site Frontend Mentor.</p>',
    features: ["<a href='https://pierre-pellegrino.github.io/Project-36-FrontEndMentor/' target='_blank' rel='noreferrer'>Bookmark Manager</a>", "<a href='https://pierre-pellegrino.github.io/Project-39-FrontEndMentor/' target='_blank' rel='noreferrer'>Manage</a>", "<a href='https://pierre-pellegrino.github.io/Project-33-FrontEndMentor/' target='_blank' rel='noreferrer'>Shortly</a>","<a href='https://pierre-pellegrino.github.io/facebook-homepage/' target='_blank' rel='noreferrer'>Page d'accueil Facebook</a>"],
    multiple: true,
    featuresText: 'Caractéristiques principales :',
    linkText: 'Liens vers les projets :'
  }
];

export default works;