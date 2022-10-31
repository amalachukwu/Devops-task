import { render, fireEvent, screen } from '@testing-library/react';
import Explore from './Explore';

const setup = () => {
  const utils = render(<Explore />)
  const loginButton = utils.getByTestId('login-button')
  const logoutButton = utils.getByTestId('logout-button')

  return {
    loginButton,
    logoutButton,
    ...utils,
  }
}

test('It should fire click event for button click', () => {
  const {loginButton} = setup()

  fireEvent.click(loginButton)
})

test('It should fire click event for button click', () => {
  const {logoutButton} = setup()

  fireEvent.click(logoutButton)
})


