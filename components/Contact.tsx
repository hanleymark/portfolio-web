import { contactData } from '../data/contactData';
import ContactButton from './ContactButton';
import { ContactData } from '../types/contacts';

interface ContactProps {
  heading?: string;
}

const Contact = ({ heading }: ContactProps) => {
  return (
    <section>
      {heading && <h3>{heading}</h3>}
      <div className='m-auto flex w-11/12 flex-wrap justify-center gap-5 p-3 items-center'>
        {contactData.map((contact) => (
          <div
            key={contact.text}
            className='flex w-full min-h-[8.5rem] rounded-lg bg-slate-700 shadow-md p-5 md:w-[40%] lg:w-[28%] xl:w-[20%]'
          >
            <ContactButton
              href={contact.href}
              target={contact.target}
              rel={contact.rel}
              text={contact.text}
              Icon={contact.Icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Contact;
