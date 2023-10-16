import Link from 'next/link';
import { ContactData } from '@/types/contacts';

const ContactButton = ({ href, target, rel, text, Icon }: ContactData) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className='flex items-center justify-center bg-inherit p-6 shadow-lg'
    >
      <div className='p-0 text-4xl'>
        <Icon className='contact-icon' />
        <h3 className='p'>{text}</h3>
      </div>
    </Link>
  );
};

export default ContactButton;
