// import SectionTitle from './animatedTitle';
import styles from './about.module.css';

const About = () => {
  return (
    <section className='h-screen w-screen bg-gray-500'>
      {/* <SectionTitle text='About' /> */}
      <p className={styles.paragraph}>
        Mark Hanley is a passionate software developer with a unique blend of
        educational and technical experience. With a foundation in teaching in
        diverse London areas, Mark has an intrinsic understanding of real-world
        challenges, enabling him to craft solutions that genuinely impact
        end-users. A graduate with an MSc in Computing Science from Birkbeck
        College, Mark has honed his skills in full-stack web development at
        Founders and Coders, diving deep into languages and tools like HTML,
        JavaScript, TypeScript, React, and more. Beyond code, Mark values
        collaboration and the synergy of diverse teams, believing in the power
        of technology to foster positive societal change.
      </p>
    </section>
  );
};

export default About;
