import { render, screen } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Greeting testing works', () => {
  // Arrange
  render(<App />)
  // Act
  // ...nothing
  // Assert
  const helloWorld = screen.getByText('Hello, World!', { exact: false })
  expect(helloWorld).toBeInTheDocument()
})
