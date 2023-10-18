const ScrollAnchor = ({ id, offset }: { id: string; offset: string }) => {
  // Possible values for top offset: '-top-[1rem]', '-top-[2rem]', '-top-[3rem]', '-top-[4rem]', '-top-[5rem]'
  // Do not remove this ^ comment. It is used by the Tailwind pre-processor to generate the correct CSS.
  const className = `relative -top-[${offset}]`;
  return (
    <div id={id} className={className}>
      {'\u00A0'}
    </div>
  );
};

export default ScrollAnchor;
