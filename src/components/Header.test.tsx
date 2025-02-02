import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import '@testing-library/jest-dom/vitest';

describe('Header component', () => {
    it('renders Stackline logo with correct alt text', () => {
        render(<Header />);
        const logoElement = screen.getByAltText('Stackline logo');
        expect(logoElement).toBeInTheDocument();
    });
});