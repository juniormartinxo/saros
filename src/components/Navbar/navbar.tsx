import { useState } from 'react'
import {
  NavbarStyled,
  MenuStyled,
  MenuItemStyled,
  MenuItemLinkStyled,
  DropdownStyled,
  DropdownItemStyled,
  DropdownItemLinkStyled,
} from './navbar.styled'
import { Logo } from '../Logo'
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

type DropdownProps = {
  name: string
  link: string
}

type MenuProps = {
  name: string
  link: string
  multi: boolean
  submenu: Array<DropdownProps>
}

function MenuItem({ name, link, multi, submenu }: MenuProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <MenuItemStyled
      onMouseOver={() => {
        setIsOpen(true)
      }}
      onMouseLeave={() => {
        setIsOpen(false)
      }}
    >
      {multi && (
        <>
          <MenuItemLinkStyled>{name}</MenuItemLinkStyled>
          <DropdownStyled style={{ display: isOpen ? 'block' : 'none' }}>
            {submenu.map((item, index) => (
              <DropdownItem name={item.name} link={item.link} key={index} />
            ))}
          </DropdownStyled>
        </>
      )}
      {!multi && <MenuItemLinkStyled href={link}>{name}</MenuItemLinkStyled>}
    </MenuItemStyled>
  )
}

function DropdownItem({ name, link }: DropdownProps) {
  return (
    <DropdownItemStyled>
      <DropdownItemLinkStyled href={link}>{name}</DropdownItemLinkStyled>
    </DropdownItemStyled>
  )
}

export { Navbar, MenuItem }
