import { ProjectData, Technologies } from '@/types/projects';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiJest,
  SiCypress,
  SiGithub,
  SiGit,
  SiVisualstudiocode,
  SiCssmodules,
  SiStyledcomponents,
  SiFigma,
} from 'react-icons/si';

// Set up tech stack icons and descriptions
const technologies: Technologies = {
  react: {
    description: 'React',
    icon: SiReact,
  },
  typescript: {
    description: 'Typescript',
    icon: SiTypescript,
  },
  javascript: {
    description: 'Javascript',
    icon: SiJavascript,
  },
  html: {
    description: 'HTML',
    icon: SiHtml5,
  },
  css: {
    description: 'CSS',
    icon: SiCss3,
  },
  node: {
    description: 'Node.js',
    icon: SiNodedotjs,
  },
  next: {
    description: 'Next.js',
    icon: SiNextdotjs,
  },
  tailwind: {
    description: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  supabase: {
    description: 'Supabase',
    icon: SiSupabase,
  },
  postgresql: {
    description: 'PostgreSQL',
    icon: SiPostgresql,
  },
  jest: {
    description: 'Jest',
    icon: SiJest,
  },
  cypress: {
    description: 'Cypress',
    icon: SiCypress,
  },
  github: {
    description: 'Github',
    icon: SiGithub,
  },
  git: {
    description: 'Git',
    icon: SiGit,
  },
  vscode: {
    description: 'Visual Studio Code',
    icon: SiVisualstudiocode,
  },
  cssmodules: {
    description: 'CSS Modules',
    icon: SiCssmodules,
  },
  styledcomponents: {
    description: 'Styled Components',
    icon: SiStyledcomponents,
  },
  figma: {
    description: 'Figma',
    icon: SiFigma,
  },
};

// Set up project details
export const projects: Array<ProjectData> = [
  {
    title: 'Portfolio project',
    description:
      'A simple portfolio of some of the projects I have worked on within my web development journey. Built using NextJS and React, this provided an opportunity to explore TailWind CSS.',
    imageUrl: 'portfolio-image.png',
    imageAlt: 'Screen grab of portfolio website',
    repoLink: 'https://github.com/hanleymark/portfolio-web',
    deploymentLink: '',
    techStack: [
      technologies.react,
      technologies.typescript,
      technologies.html,
      technologies.css,
      technologies.node,
      technologies.next,
      technologies.tailwind,
      technologies.github,
      technologies.git,
      technologies.vscode,
      technologies.cssmodules,
    ],
  },
  {
    title: 'Rent-Shield project',
    description:
      'Rental property search full-stack web application, built for product owner as part of the Founders and Coders full time programme. This project makes use of Supabase PAAS and incorporates OAuth2 authentication, a PostgreSQL database, and a React/NextJS front-end as well as some Jest and Cypress testing. Prototype and initial user testing was carried out using Figma.',
    imageUrl: 'rentshield-image.png',
    imageAlt: 'Screen grab of Rent-Shield website',
    repoLink: 'https://github.com/hanleymark/rent-shield',
    deploymentLink: '',
    techStack: [
      technologies.react,
      technologies.typescript,
      technologies.html,
      technologies.css,
      technologies.node,
      technologies.next,
      technologies.tailwind,
      technologies.supabase,
      technologies.postgresql,
      technologies.jest,
      technologies.cypress,
      technologies.github,
      technologies.git,
      technologies.vscode,
      technologies.cssmodules,
      technologies.figma,
    ],
  },
  {
    title: 'Moodmap project',
    description:
      'A simple mobile PWA for tracking mood over time. Built using React and JavaScript, this project was an opportunity to explore the use of Styled Components and CSS Modules.',
    imageUrl: 'moodmap-image.png',
    imageAlt: 'Screen grab of Moodmap website',
    repoLink: 'https://github.com/hanleymark/mood-map',
    deploymentLink: '',
    techStack: [
      technologies.javascript,
      technologies.html,
      technologies.css,
      technologies.node,
      technologies.next,
      technologies.supabase,
      technologies.postgresql,
      technologies.github,
      technologies.git,
      technologies.vscode,
      technologies.cssmodules,
      technologies.figma,
    ],
  },
  {
    title: 'Palette project',
    description:
      'A simple CSS palette picker, built using vanilla HTML/CSS/JavaScript, this project was an opportunity to explore CSS and DOM manipulation.',
    imageUrl: 'palette-image.png',
    imageAlt: '',
    repoLink: 'https://github.com/hanleymark/palette',
    deploymentLink: '',
    techStack: [
      technologies.javascript,
      technologies.html,
      technologies.css,
      technologies.github,
      technologies.git,
      technologies.vscode,
    ],
  },
  {
    title: '2048 game project',
    description:
      'A simple clone of the 2048 game, built using vanilla HTML/CSS/JavaScript, this project was an opportunity to explore HTML canvas drawing.',
    imageUrl: '2048-image.png',
    imageAlt: '',
    repoLink: 'https://github.com/hanleymark/game-2048',
    deploymentLink: '',
    techStack: [
      technologies.javascript,
      technologies.html,
      technologies.css,
      technologies.github,
      technologies.git,
      technologies.vscode,
    ],
  },
];
