import { FC } from 'react';

const Spinner: FC = () => {
  return (
    <div className="h-screen pt-20 flex justify-center">
      <div className="w-32 h-32 rounded-full border-8 border-y-secondary border-x-primary animate-spin"></div>
    </div>
  );
};

export default Spinner;
