import {
  TopNavbarStyled,
  TopMenuStyled,
  TopMenuItemStyled,
  TopMenuItemLinkStyled,
} from './topnavbar-styled'
import { Logo } from '../logo'

function TopNavbar() {
  return (
    <TopNavbarStyled>
      <TopMenuStyled>
        <TopMenuItemStyled key={0}>
          <Logo />
        </TopMenuItemStyled>

        <TopMenuItemStyled key={1}>
          <TopMenuItemLinkStyled href="/">Página inicial</TopMenuItemLinkStyled>
        </TopMenuItemStyled>

        <TopMenuItemStyled key={2}>
          <TopMenuItemLinkStyled href="/">Sobre</TopMenuItemLinkStyled>
        </TopMenuItemStyled>

        <TopMenuItemStyled key={3}>
          <TopMenuItemLinkStyled href="/">Contato</TopMenuItemLinkStyled>
        </TopMenuItemStyled>
      </TopMenuStyled>
    </TopNavbarStyled>
  )
}

export { TopNavbar }
