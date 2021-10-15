import { TopNavbar } from '../topnavbar'
import {
  ContainerHeaderStyled,
  HeaderStyled,
  NavbarStyled,
} from './header.styled'

function Header() {
  return (
    <HeaderStyled>
      <NavbarStyled>
        <ContainerHeaderStyled>NavbarStyled</ContainerHeaderStyled>
      </NavbarStyled>
      <TopNavbar />
    </HeaderStyled>
  )
}

export { Header }
