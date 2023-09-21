import styles from './sectionTitle.module.css';

const SectionTitle = ({ text }: { text: string }) => (
  <h2 className={styles.sectionTitle}>{text}</h2>
);

export default SectionTitle;
