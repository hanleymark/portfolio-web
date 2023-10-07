import { ProjectData } from '@/types/projects';
import GalleryWindow from './galleryWindow';

interface Props {
  heading: string;
  projects: Array<ProjectData>;
}

const ProjectGallery = ({ heading, projects }: Props) => {
  return (
    <section id={'gallery'}>
      {heading && <h3>{heading}</h3>}
      <div className='flex flex-row flex-wrap justify-center'>
        {projects.map((project: ProjectData) => {
          return (
            <GalleryWindow
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={`/images/${project.imageUrl}`}
              imageAlt={project.imageAlt}
              repoLink={project.repoLink}
              deploymentLink={project.deploymentLink}
              techStack={project.techStack}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectGallery;
