import { BiSolidEnvelope, BiSolidFilePdf } from 'react-icons/bi';
import {
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiSocketdotio,
  SiDigitalocean,
  SiNginx,
  SiGithubactions,
  SiX,
  SiRedis,
  SiBun,
  SiTypescript,
  SiHonor,
  SiExpress,
  SiInstagram,
  SiNintendonetwork,
} from 'react-icons/si';

export const helpCommand = [
  {
    title: 'bio',
    info: 'Show my bio information',
  },
  {
    title: 'skills',
    info: 'List out all my skills',
  },
  {
    title: 'projects',
    info: 'List out my projects',
  },
  {
    title: 'contact',
    info: 'Show my contact details',
  },
  {
    title: 'exit',
    info: 'Exit the terminal mode',
  },
  {
    title: 'clear',
    info: 'Clear the terminal',
  },
];

export const skillsCommand = [
  {
    title: 'React',
    Icon: SiReact,
    level: 80,
  },
  {
    title: 'Nextjs',
    Icon: SiNextdotjs,
    level: 90,
  },
  {
    title: 'React-Native',
    Icon: SiReact,
    level: 80,
  },
  {
    title: 'Tailwind',
    Icon: SiTailwindcss,
    level: 85,
  },
  {
    title: 'MongoDB',
    Icon: SiMongodb,
    level: 90,
  },
  {
    title: 'Postgres',
    Icon: SiPostgresql,
    level: 75,
  },
  {
    title: 'Prisma',
    Icon: SiPrisma,
    level: 65,
  },
  {
    title: 'Nodejs',
    Icon: SiNodedotjs,
    level: 90,
  },
  {
    title: 'Git',
    Icon: SiGit,
    level: 85,
  },
  {
    title: 'Github Actions',
    Icon: SiGithubactions,
    level: 75,
  },
  {
    title: 'Docker',
    Icon: SiDocker,
    level: 70,
  },
  {
    title: 'Nginx',
    Icon: SiNginx,
    level: 65,
  },
  {
    title: 'Socket io',
    Icon: SiSocketdotio,
    level: 60,
  },
  {
    title: 'Digital Ocean',
    Icon: SiDigitalocean,
    level: 50,
  },
  {
    title: 'Redis',
    Icon: SiRedis,
    level: 50,
  },
];

export const projectsCommand = [
  {
    title: 'Support Desk - Web/Mobile',
    tech: [SiReact, SiTailwindcss, SiNodedotjs, SiSocketdotio, SiDocker, SiNginx, SiMongodb],
    link: 'https://supportdesk.dryicesolutions.net/',
    cover: '/project-1.jpeg',
    background: 'bg-indigo-500',
  },
  {
    title: 'Finance SaaS - Web',
    tech: [SiNextdotjs, SiTailwindcss, SiBun, SiTypescript, SiPostgresql],
    link: '#',
    cover: '/project-3.PNG',
    background: 'bg-indigo-500',
  },
  {
    title: 'Threads - Web',
    tech: [SiReact, SiTailwindcss, SiNodedotjs, SiSocketdotio, SiMongodb],
    link: '#',
    cover: '/project-2.jpeg',
    background: 'bg-green-500',
  },
  
  {
    title: 'Plinko - Web',
    tech: [SiReact, SiTailwindcss, SiTypescript, SiExpress, SiNodedotjs],
    link: '#',
    cover: '/project-4.PNG',
    background: 'bg-green-500',
  },
];

export const contactCommand = [
  {
    title: 'Github',
    icon: SiGithub,
    username: '@Rish4bh0',
    link: 'https://github.com/Rish4bh0',
  },
  {
    title: 'Instagram',
    icon: SiInstagram,
    username: '@rish4bh.s',
    link: 'https://instagram.com/rish4bh.s',
  },
  {
    title: 'LinkedIn',
    icon: SiLinkedin,
    username: '@hyper',
    link: 'https://www.linkedin.com/in/hyper/',
  },
  {
    title: 'Email',
    icon: BiSolidEnvelope,
    username: 'mail@rishabhsingh.com.np',
    link: 'mailto:mail@rishabhsingh.com.np',
  },
  {
    title: 'CV',
    icon: BiSolidFilePdf,
    username: '@hyper',
    link: 'https://cv.rishabhsingh.com.np',
  },
];
