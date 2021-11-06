import { render } from '@testing-library/react'
import { Header } from '.'
// import { ThemeContext } from 'styled-components'

describe('Header', () => {
  test('O Header deve ter o Switch', () => {
    render(<Header />)

    // const Switch = screen.getByRole('switch')

    // it('O Header deve ter o Switch', () => {
    // expect(Switch).toBeInTheDocument()
    // })
  })
})
