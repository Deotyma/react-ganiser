import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Homepage UI', () =>{
    test('renders render welcome text', () => {
        render(<Home />);
        const welcomeH = screen.getByText(/Welcome to our app/);
        expect(welcomeH).toBeInTheDocument();
      });
      test('renders 2 buttons', () => {
          render(<Home />);
          expect (screen.getAllByRole('button')).toHaveLength(2);
        });
})
