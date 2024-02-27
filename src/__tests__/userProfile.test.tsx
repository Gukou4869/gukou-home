import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import UserProfile from '../components/userProfile/userProfile';

describe('userProfile Component', () => {
  it('should render correctly', () => {
    const age = 28;
    const name = 'shota';

    render(<UserProfile age={age} name={name} />);
    expect(screen.getByText('shota')).toBeInTheDocument();
    expect(screen.getByText('28 years old')).toBeInTheDocument();
  });

  it('should display props correctly', () => {
    const age = 28;
    const name = 'shota';

    render(<UserProfile age={age} name={name} />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`${age} years old`)).toBeInTheDocument();
  });

  it('should display age with expected format', () => {
    const age = 28;
    const name = 'shota';

    render(<UserProfile age={age} name={name} />);

    const expectedAgeFormat = `${age} years old`;

    expect(screen.getByText(expectedAgeFormat)).toBeInTheDocument();
  });
});
