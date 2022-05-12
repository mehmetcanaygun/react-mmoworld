type TProps = {
  path: string;
  size: string;
};

const Icon = ({ path, size }: TProps) => {
  return (
    <img
      src={path}
      className="aspect-square inline-block"
      style={{ width: `${size}px` }}
      alt="Icon"
    />
  );
};

export default Icon;
