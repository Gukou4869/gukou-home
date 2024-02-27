import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Button from '../components/button/button';

describe('Button Component', () => {
  it('onClick handler will be called after clicking', () => {
    const handleClick = jest.fn();

    // render
    const { getByText } = render(<Button label="test" onClick={handleClick} />);

    // event
    fireEvent.click(getByText('test'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
