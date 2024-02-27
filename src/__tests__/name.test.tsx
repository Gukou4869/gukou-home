import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import NameSection from '../components/name/name';

describe('NameSection Component', () => {
  it('should display full name and role', () => {
    const fullName = 'Shota Taniguchi';
    const role = 'FrontEnd Developer';

    // render
    render(<NameSection fullName="Shota Taniguchi" role="FrontEnd Developer" />);

    expect(screen.getByText(fullName)).toBeInTheDocument();
    expect(screen.getByText(role)).toBeInTheDocument();
  });

  it('should have correct style classes applied', () => {
    const fullName = 'Jane Doe';
    const role = 'Project Manager';

    render(<NameSection fullName={fullName} role={role} />);

    expect(screen.getByText(fullName)).toHaveClass('name');
    expect(screen.getByText(role)).toHaveClass('role');
  });
});
