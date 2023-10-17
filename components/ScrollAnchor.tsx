const ScrollAnchor = ({ id, offset }: { id: string; offset: string }) => {
  return (
    <div id={id} className={`relative -top-[${offset}]`}>
      {'\u00A0'}
    </div>
  );
};

export default ScrollAnchor;
