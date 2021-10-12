import { HeaderStyled, TopbarStyled, NavbarStyled } from './header-styled'
import { Logo } from '../logo'

function Header() {
  return (
    <HeaderStyled>
      <TopbarStyled>
        <Logo />
      </TopbarStyled>
      <NavbarStyled>NavbarStyled</NavbarStyled>
    </HeaderStyled>
  )
}

export { Header }
