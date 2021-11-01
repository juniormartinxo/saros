import { screen, render } from '@testing-library/react'
import { Header } from '.'
import { Navbar } from 'components/Navbar'
import Switch from 'react-switch'
import {
  ContainerHeaderStyled,
  HeaderStyled,
  TopbarStyled,
} from './header.styled'
// import { ThemeContext } from 'styled-components'

describe('Header', () => {
  test('O Header deve ser assim', () => {
    const toggleTheme = jest.fn()

    render(<Header />)

    expect(screen.getByRole('header')).toEqual(
      <HeaderStyled>
        <TopbarStyled>
          <ContainerHeaderStyled>
            <Switch
              onChange={toggleTheme}
              checked={false}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor="#000"
              onColor="#34c38f"
            />
          </ContainerHeaderStyled>
        </TopbarStyled>
        <Navbar />
      </HeaderStyled>,
    )
  })
})
