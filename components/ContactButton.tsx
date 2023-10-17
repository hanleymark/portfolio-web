import Link from 'next/link';
import { ContactData } from '@/types/contacts';

const ContactButton = ({ href, target, rel, text, Icon }: ContactData) => {
  return (
    <Link href={href} target={target} rel={rel} className='m-auto group/link'>
      <Icon className='m-auto text-[2.5rem] transition-all group-hover/link:text-[2.8rem] h-auto' />
      <p className='text-center text-[1.2rem] transition-all group-hover/link:text-[1.3rem] mt-5'>
        {text}
      </p>
    </Link>
  );
};

export default ContactButton;
