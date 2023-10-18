import AnimatedTitle from '@/components/AnimatedTitle';
import Blog from '@/components/Blog';

const BlogPage = () => {
  return (
    <div>
      <div className='h-10'></div>
      <AnimatedTitle text={'\u007bdev blog\u007d'} replay={true} />
      <Blog />
    </div>
  );
};

export default BlogPage;
