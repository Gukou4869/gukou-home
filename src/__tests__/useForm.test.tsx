import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import UserForm from '../components/userForm/userForm';

describe('userForm Component', () => {
  it('should submit input value', async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();

    // renderする
    render(<UserForm onSubmit={handleSubmit} />);

    // inputする
    await user.type(screen.getByRole('textbox', { name: /name/i }), 'John Doe');

    // submitする
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // onSubmitの関数にPropsとしてInputが渡っているか確認する。
    expect(handleSubmit).toHaveBeenCalledWith('John Doe');

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
