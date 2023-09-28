interface Props {
  heading?: string;
}

const ProjectGallery = ({ heading }: Props) => {
  return <section id={'gallery'}>{heading && <h2>{heading}</h2>}</section>;
};

export default ProjectGallery;
