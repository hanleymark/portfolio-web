interface Props {
  heading?: string;
}

const Contact = ({ heading }: Props) => {
  return <section id={'contact'}>{heading && <h3>{heading}</h3>}</section>;
};
export default Contact;
