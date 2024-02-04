import { FC } from 'react';

interface Props {
  a?: string;
  b: boolean;
  id: string;
  name: string;
  onClick: () => void;
  ptest: string;
}

const Test: FC<Props> = (props) => {
  const { name, onClick } = props;

  return (
    <div className="">
      <h1>{name}</h1>
      <button datatype="test" type="button" onClick={onClick}>
        test
      </button>
    </div>
  );
};

export default Test;
