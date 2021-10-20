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
import { NavIcons } from '../NavIcons'
import { menuItems } from './menuItems'

import * as Icon from 'resources/ui/icons'

function Navbar() {
  return (
    <NavbarStyled>
      <MenuStyled>
        <MenuItemStyled key={0}>
          <Logo />
        </MenuItemStyled>

        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            link={item.link}
            icon={item.icon}
            multi={item.multi}
            submenu={item.submenu}
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
  icon: string
  multi: boolean
  submenu: Array<DropdownProps>
}

function MenuItem({ name, link, icon, multi, submenu }: MenuProps) {
  const [style, setStyle] = useState({
    left: -1000,
    top: 58,
    opacity: 0,
    transition: 'top 0.3s linear, opacity 0.2s linear',
  })

  return (
    <MenuItemStyled
      onMouseOver={() => {
        setStyle({
          left: -5,
          top: 50,
          transition: 'left 0s linear, top 0.3s linear, opacity 0.2s linear',
          opacity: 1,
        })
      }}
      onMouseLeave={() => {
        setStyle({
          left: -1000,
          top: 58,
          opacity: 0,
          transition: 'top 0.2s linear, opacity 0.3s linear',
        })
      }}
    >
      {multi && (
        <>
          <MenuItemLinkStyled>
            <NavIcons icon={icon} /> <span>{name}</span> <Icon.ChevronDown />
          </MenuItemLinkStyled>
          <DropdownStyled style={style}>
            {submenu.map((item, index) => (
              <DropdownItem name={item.name} link={item.link} key={index} />
            ))}
          </DropdownStyled>
        </>
      )}
      {!multi && (
        <MenuItemLinkStyled href={link}>
          <NavIcons icon={icon} /> {name}
        </MenuItemLinkStyled>
      )}
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
