import { screen } from '@testing-library/dom'
import { App } from './App'
import { render } from '@testing-library/react'

describe('Test App', () => {
  render(<App />)

  it('renderizar o Header', () => {
    expect(screen.getByRole('header')).toBeInTheDocument()
  })

  it('renderizar o Main', () => {
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
