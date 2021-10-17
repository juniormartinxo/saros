import { Navbar } from '../navbar'
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
      <Navbar />
    </HeaderStyled>
  )
}

export { Header }
