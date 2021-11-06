import { screen } from '@testing-library/dom'
import { App } from './App'
import { render } from '@testing-library/react'

describe('Test App', () => {
  render(<App />)
  const Header = screen.getByRole('header')
  // const Main = screen.getByRole('main')

  it('renderizar o Header', () => {
    expect(Header).toBeInTheDocument()
  })

  /*
  it('renderizar o Main', () => {
    expect(Main).toBeInTheDocument()
  })
  */
})
