interface Props {
    heading?: string;
}

const Contact = ({heading}: Props) => {
  return <section id={'contact'}>{heading && <h2>{heading}</h2>}</section>;
}
export default Contact;