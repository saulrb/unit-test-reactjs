import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting component', () => {
  test('Render Hello World and Its nice to see you', () => {
    // Arrange
    render(<Greeting />)
    // Act
    // ...nothing

    // Assert
    const helloWorld = screen.getByText('Hello, World!', { exact: false })
    expect(helloWorld).toBeInTheDocument()
  })

  test('Renders Same as frist test button not clicked', () => {
    // Arrange
    render(<Greeting />)
    // Act
    // ...nothing

    // Assert
    const niceToSeeU = screen.getByText("it's nice to see you")
    expect(niceToSeeU).toBeInTheDocument()
  })

  test('Renders "Changed" test button clicked', async () => {
    // Arrange
    render(<Greeting />)
    // Act
    const buttonElement = screen.getByRole('button')
    await userEvent.click(buttonElement)

    const changed = screen.getByText('Changed!', { exact: false })
    expect(changed).toBeInTheDocument()
  })
  test('Does not render "nice to see you" if button clicked', async () => {
    // Arrange
    render(<Greeting />)
    // Act
    const buttonElement = screen.getByRole('button')
    await userEvent.click(buttonElement)

    const changed = screen.queryByText("it's nice to see you")

    expect(changed).toBeNull()
  })
})
