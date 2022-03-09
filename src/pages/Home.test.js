import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Homepage UI', () =>{
    test('renders welcome text', () => {
        render(<Home />);
        screen.getByText(/Welcome to our app/);
      });
})
