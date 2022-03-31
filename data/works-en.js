const works = [
  {
    id: 1,
    name: 'Snipshare',
    slug: 'snipshare',
    role: 'Front-End Developer',
    description: 'Social network that allows users to share their own code snippets or browse those created by people.',
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
    detailDesc:'Snipshare is a social network created for developers.<br /> It lets you create your own snippets in more than 60 programming languages. <br /><br /> You can also browse snippets from users all around the world, add them to your favorites, comment on them, and share them on Twitter and Facebook.',
    features: ['Online Code Editor', 'Code Highlighter', 'Infinite Scroller', 'Like, comment, share', 'Github OAuth']
  },
  {
    id: 2,
    name: 'Immolib',
    slug: 'immolib',
    role: 'Front-End / Back-End Developer',
    description: "immolib is a service that helps you organizing real estate appointments and collecting your candidates files.",
    picture: 'immolib_mockup.png',
    link: 'https://immolib.herokuapp.com/',
    github_link: 'https://github.com/pierre-pellegrino/Immolib',
    detailImg: ['immolib.png', 'immolib2.PNG', 'immolib3.PNG', 'immolib_form.gif'],
    tags: [
      'Ajax',
      'Sass',
      'Ruby On Rails'
    ],
    detailDesc:'immolib is a service that helps you organizing real estate appointments and collecting your candidates files.<br /><br /> You can post your own property ad, set up your calendar with your time slots and let customers schedule appointments.<br /><br /> Customers are then able to send their real estate files online.',
    features: ['Online Calendar', 'Online documents storage', 'Automatic reminder emails', 'Online payment', 'Google OAuth']
  },
  {
    id: 3,
    name: 'Immocoin',
    slug: 'immocoin',
    role: 'Front-End Developer',
    description: "Real estate marketplace.",
    picture: 'immocoin_mockup.png',
    link: 'https://immocoin.vercel.app/',
    github_link: 'https://github.com/pierre-pellegrino/immocoin',
    detailImg: ['immocoin.png', 'immocoin3.png', 'immocoin4.png'],
    tags: [
      'Sass',
      'Javascript',
      'NextJS',
      'Ruby On Rails'
    ],
    detailDesc:'immocoin is a real estate marketplace.<br /><br /> After registering, you can browse property ads or create your own. If you find one interesting, you can access to its owner profile and contact him by email.<br/ ><br /> This was a training project made within one week.',
    features: ['Authentication', 'Ad management']
  },
  {
    id: 4,
    name: 'Various projects',
    slug: 'various-projects',
    role: 'Front-End Developer / Web Integrator',
    description: "Some of the web integrations I made.",
    picture: 'various_mockup.png',
    detailImg: ['various_crop.png', 'various2_crop.png', 'various3_crop.png', 'facebook_crop.png'],
    tags: [
      'Html',
      'CSS',
      'Javascript'
    ],
    detailDesc:'These are Front-End only projects, mostly made in a few hours with the help of Frontend Mentor website.',
    features: ["<a href='https://pierre-pellegrino.github.io/Project-36-FrontEndMentor/' target='_blank' rel='noreferrer'>Bookmark Manager</a>", "<a href='https://pierre-pellegrino.github.io/Project-39-FrontEndMentor/' target='_blank' rel='noreferrer'>Manage landing page</a>", "<a href='https://pierre-pellegrino.github.io/Project-33-FrontEndMentor/' target='_blank' rel='noreferrer'>Shortly</a>","<a href='https://pierre-pellegrino.github.io/facebook-homepage/' target='_blank' rel='noreferrer'>Facebook home integration</a>"],
    multiple: true
  }
];

export default works;