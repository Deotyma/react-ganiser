import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Homepage UI', () =>{
    test('renders welcome text', () => {
        render(<Home />);
        screen.getByText(/Welcome to our app/);
      });
      test('renders 2 buttons', () => {
          render(<Home />);
          expect (screen.getAllByRole('button')).toHaveLength(2);
        });
})
