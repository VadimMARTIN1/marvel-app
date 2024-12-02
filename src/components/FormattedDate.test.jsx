import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormattedDate from './FormattedDate';

describe('FormattedDate', () => {
    test('renders correctly with a valid date', () => {
        const date = '2023-10-15T00:00:00Z';
        render(<FormattedDate date={date} />);
        const dateElement = screen.getByText('Oct 15, 2023');
        expect(dateElement).toBeInTheDocument();
    });

    test('handles an invalid date gracefully', () => {
        const date = 'invalid-date';
        render(<FormattedDate date={date} />);
        screen.debug();
        const dateElement = screen.getByText('Invalid Date');
        expect(dateElement).toBeInTheDocument();
    });

    test('renders correctly with different date formats', () => {
        const date = '2023-10-15';
        render(<FormattedDate date={date} />);
        const dateElement = screen.getByText('Oct 15, 2023');
        expect(dateElement).toBeInTheDocument();
    });
});