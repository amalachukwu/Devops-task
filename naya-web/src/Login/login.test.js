import { render, fireEvent, screen } from '@testing-library/react';
import Login from './login';
import renderer from "react-test-renderer";

const setup = () => {
  const utils = render(<Login />)
  const usernameInput = utils.getByPlaceholderText('Username')
  const passwordInput = utils.getByPlaceholderText('Password')
  const submitButton = utils.getByTestId('submit')

  return {
    usernameInput,
    passwordInput,
    submitButton,
    ...utils,
  }
}

test('It should fire change event for username input', () => {
  const {usernameInput} = setup()
  fireEvent.change(usernameInput, {target: {value: 'a'}})
  expect(usernameInput.value).toBe('a')
})

test('It should fire change event for password input', () => {
  const {passwordInput} = setup()
  fireEvent.change(passwordInput, {target: {value: 's'}})
  expect(passwordInput.value).toBe('s')
})

test('It should fire click event for button click', () => {
  const {submitButton} = setup()

  fireEvent.click(submitButton)
})

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Login />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});


