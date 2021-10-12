import { TopNavbar } from '../topnavbar'
import { HeaderStyled, NavbarStyled } from './header-styled'
import { Header } from './header'

describe('Header', () => {
  it('deve retornar o header', () => {
    expect(Header()).toEqual(
      <HeaderStyled>
        <NavbarStyled>NavbarStyled</NavbarStyled>
        <TopNavbar />
      </HeaderStyled>,
    )
  })
})
