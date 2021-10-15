import {
  TopNavbarStyled,
  TopMenuStyled,
  TopMenuItemStyled,
  TopMenuItemLinkStyled,
  TopSubMenuStyled,
  TopSubMenuItemStyled,
  TopSubMenuItemLinkStyled,
} from './topnavbar.styled'
import { Logo } from '../logo'
import { menuItems } from './menuItems'

function TopNavbar() {
  return (
    <TopNavbarStyled>
      <TopMenuStyled>
        <TopMenuItemStyled key={0}>
          <Logo />
        </TopMenuItemStyled>

        {menuItems.map((item, index) => (
          <TopMenuItem
            name={item.name}
            link={item.link}
            submenu={item.submenu}
            multi={item.multi}
            key={index}
          />
        ))}
      </TopMenuStyled>
    </TopNavbarStyled>
  )
}

type TopSubMenuProps = {
  name: string
  link: string
}

type TopMenuProps = {
  name: string
  link: string
  multi: boolean
  submenu: Array<TopSubMenuProps>
}

function TopMenuItem({ name, link, multi, submenu }: TopMenuProps) {
  return (
    <TopMenuItemStyled>
      <TopMenuItemLinkStyled href={link}>{name}</TopMenuItemLinkStyled>
      {multi && (
        <TopSubMenuStyled>
          {submenu.map((item, index) => (
            <TopSubMenuItem name={item.name} link={item.link} key={index} />
          ))}
        </TopSubMenuStyled>
      )}
    </TopMenuItemStyled>
  )
}

function TopSubMenuItem({ name, link }: TopSubMenuProps) {
  return (
    <TopSubMenuItemStyled>
      <TopSubMenuItemLinkStyled href={link}>{name}</TopSubMenuItemLinkStyled>
    </TopSubMenuItemStyled>
  )
}

export { TopNavbar, TopMenuItem }
