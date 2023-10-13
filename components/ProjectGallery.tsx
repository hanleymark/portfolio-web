import { ProjectData } from '@/types/projects';
import GalleryWindow from './GalleryWindow';

interface Props {
  heading: string;
  projects: Array<ProjectData>;
}

const ProjectGallery = ({ heading, projects }: Props) => {
  return (
    <section id={'gallery'}>
      {heading && <h3>{heading}</h3>}
      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
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
