import { render, screen } from '@testing-library/react';
import Signup from './Signup';

describe('Signup UI', () =>{
    test('renders signup page', () => {
        render(<Signup />);
        screen.getByText('Sign up to our app');
      });
})