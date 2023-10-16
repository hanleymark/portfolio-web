import { contactData } from '../data/contactData';
import ContactButton from './ContactButton';
import { ContactData } from '../types/contacts';

interface ContactProps {
  heading?: string;
}

const Contact = ({ heading }: ContactProps) => {
  return (
    <section id={'contact'}>
      {heading && <h3>{heading}</h3>}
      {contactData.map((contact) => (
        <ContactButton
          key={contact.text}
          href={contact.href}
          target={contact.target}
          rel={contact.rel}
          text={contact.text}
          Icon={contact.Icon}
        />
      ))}
    </section>
  );
};
export default Contact;
