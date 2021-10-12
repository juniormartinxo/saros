import { TopNavbar } from '../topnavbar'
import { HeaderStyled, NavbarStyled } from './header-styled'

function Header() {
  return (
    <HeaderStyled>
      <NavbarStyled>NavbarStyled</NavbarStyled>
      <TopNavbar />
    </HeaderStyled>
  )
}

export { Header }
