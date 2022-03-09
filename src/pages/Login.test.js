import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login UI', () =>{
    test('renders login page', () => {
        render(<Login />);
        screen.getByText('Login to our app');
        screen.getByLabelText('Email')
        screen.getByLabelText('Password');
        screen.getByText('Submit');

        //expect(container.querySelectorAll('.error')).toHaveLength(0)

      });

      test('submit login form', async () => {
        const handleSubmit = jest.fn()
        render(<Login onSubmit={handleSubmit}/>)

        userEvent.type(screen.getByLabelText(/Email/i), 'anna@gmail.com')
        userEvent.type(screen.getByLabelText(/Password/i), 'Renia')
        
        userEvent.click(screen.getByRole('button', {name: /submit/i}))


        await waitFor(() =>
       
        expect(handleSubmit).toHaveBeenCalledTimes(1),
        expect(handleSubmit).toHaveBeenCalledWith({
         email: 'anna@gmail.com',
         password: 'Renia'
        })
        )
      })
})