import Link from 'next/link';
import { ContactData } from '@/types/contacts';

const ContactButton = ({ href, target, rel, text, Icon }: ContactData) => {
  return (
    <Link href={href} target={target} rel={rel} className='group/link m-auto'>
      <Icon className='m-auto h-auto text-[2.5rem] transition-all group-hover/link:text-[2.8rem]' />
      <p className='mt-5 text-center text-[1.2rem] transition-all group-hover/link:text-[1.3rem]'>
        {text}
      </p>
    </Link>
  );
};

export default ContactButton;
