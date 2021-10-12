import { HeaderStyled, TopbarStyled, NavbarStyled } from './header-styled'
import { Logo } from '../logo'
import { Header } from './header'

describe('Header', () => {
  it('deve retornar o header', () => {
    expect(Header()).toEqual(
      <HeaderStyled>
        <TopbarStyled>
          <Logo />
        </TopbarStyled>
        <NavbarStyled>NavbarStyled</NavbarStyled>
      </HeaderStyled>,
    )
  })
})
