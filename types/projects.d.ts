import { IconType } from 'react-icons';

export interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  repoLink: string;
  deploymentLink: string;
  techStack: Array<Tech>;
}

export interface Tech {
  description: string;
  icon: IconType;
}

export interface Technologies {
  [key: string]: Tech;
}
