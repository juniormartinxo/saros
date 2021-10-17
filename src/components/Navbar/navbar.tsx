import {
  NavbarStyled,
  MenuStyled,
  MenuItemStyled,
  MenuItemLinkStyled,
  DropdownStyled,
  SubMenuItemStyled,
  SubMenuItemLinkStyled,
} from './navbar.styled'
import { Logo } from '../logo'
import { menuItems } from './menuItems'

function Navbar() {
  return (
    <NavbarStyled>
      <MenuStyled>
        <MenuItemStyled key={0}>
          <Logo />
        </MenuItemStyled>

        {menuItems.map((item, index) => (
          <MenuItem
            name={item.name}
            link={item.link}
            submenu={item.submenu}
            multi={item.multi}
            key={index}
          />
        ))}
      </MenuStyled>
    </NavbarStyled>
  )
}

type SubMenuProps = {
  name: string
  link: string
}

type MenuProps = {
  name: string
  link: string
  multi: boolean
  submenu: Array<SubMenuProps>
}

function MenuItem({ name, link, multi, submenu }: MenuProps) {
  return (
    <MenuItemStyled>
      <MenuItemLinkStyled href={link}>{name}</MenuItemLinkStyled>
      {multi && (
        <DropdownStyled>
          {submenu.map((item, index) => (
            <SubMenuItem name={item.name} link={item.link} key={index} />
          ))}
        </DropdownStyled>
      )}
    </MenuItemStyled>
  )
}

function SubMenuItem({ name, link }: SubMenuProps) {
  return (
    <SubMenuItemStyled>
      <SubMenuItemLinkStyled href={link}>{name}</SubMenuItemLinkStyled>
    </SubMenuItemStyled>
  )
}

export { Navbar, MenuItem }
