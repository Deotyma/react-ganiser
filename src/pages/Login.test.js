import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login UI', () =>{
    test('renders login page', () => {
        render(<Login />);
        screen.getByText('Login to our app');
        screen.getByPlaceholderText('Adresse email')
        screen.getByPlaceholderText('Mot de passe');
        screen.getByText('Envoyer');

        //expect(screen.getByText('Envoyer')).toBeDisabled()
        //expect(container.querySelectorAll('.error')).toHaveLength(0)

      });
})