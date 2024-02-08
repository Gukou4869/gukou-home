import { FC } from 'react';

const Button: FC = () => {
  return (
    <button
      className="rounded-md bg-black px-3 transition-all duration-700 hover:bg-slate-50 hover:text-black"
      type="button"
    >
      Button
    </button>
  );
};

export default Button;
