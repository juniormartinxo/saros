import { Navbar } from 'components/Navbar'
import {
  HeaderStyled,
  NavbarStyled,
  ContainerHeaderStyled,
} from './header.styled'
import { Header } from './header'

describe('Header', () => {
  it('deve retornar o header', () => {
    expect(Header()).toEqual(
      <HeaderStyled>
        <NavbarStyled>
          <ContainerHeaderStyled>NavbarStyled</ContainerHeaderStyled>
        </NavbarStyled>
        <Navbar />
      </HeaderStyled>,
    )
  })
})
