import GalleryWindow from './galleryWindow';

interface Props {
  heading?: string;
}

const ProjectGallery = ({ heading }: Props) => {
  return (
    <section id={'gallery'}>
      {heading && <h3>{heading}</h3>}
      <div className='flex flex-row flex-wrap justify-center gap-5'>
        <GalleryWindow
          title='A sample project'
          image='./projects/pic.png'
          link='#'
          alt='A project image'
          description='This is a description'
        />
        <GalleryWindow
          title='A sample project'
          image='./projects/pic.png'
          link='#'
          alt='A project image'
          description='This is a description'
        />
        <GalleryWindow
          title='A sample project'
          image='./projects/pic.png'
          link='#'
          alt='A project image'
          description='This is a description'
        />
      </div>
    </section>
  );
};

export default ProjectGallery;
