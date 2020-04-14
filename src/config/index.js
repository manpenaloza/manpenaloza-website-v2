module.exports = {
  siteTitle: 'Manuel Penaloza | Software Engineer',
  siteDescription:
    'I am a software engineer based near Graz (Austria) who specializes in architecting and developing high-quality websites and applications.',
  siteKeywords:
    'Manuel Penaloza, Brittany, Chiang, bchiang7, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://manpenaloza.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-138398009-2',
  googleVerification: '_qPD0hoV63ZEv-6nRvC1YJspfeP8mxZgONO1GV7CQf4',
  name: 'Manuel Penaloza',
  location: 'Graz / Kirchbach in der Steiermark, Austria',
  email: 'manuel.penaloza@gmx.at',
  github: 'https://github.com/manpenaloza',
  twitterHandle: '@manpenaloza',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/manpenaloza',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/penalozamanuel/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/manpenaloza',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/manpenaloza',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
