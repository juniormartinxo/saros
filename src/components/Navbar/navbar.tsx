import { useState } from 'react'
import * as Styled from './navbar.styled'
import { Logo } from '../Logo'
import { NavIcon } from '../NavIcon'
import { menuItems } from './menuItems'

import * as Icon from 'resources/ui/icons'

function Navbar() {
  return (
    <Styled.NavbarStyled>
      <Styled.MenuStyled>
        <Styled.MenuItemStyled key={0}>
          <Logo />
        </Styled.MenuItemStyled>

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
      </Styled.MenuStyled>
    </Styled.NavbarStyled>
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
    top: 60,
    opacity: 0,
    transition: 'top 0.3s linear, opacity 0.2s linear',
  })

  const handleStyle = (left: number, top: number, opacity: number) => {
    setStyle({
      left: left,
      top: top,
      opacity: opacity,
      transition: 'left 0s linear, top 0.3s linear, opacity 0.2s linear',
    })
  }

  return (
    <Styled.MenuItemStyled
      onMouseOver={() => {
        handleStyle(-5, 51, 1)
      }}
      onMouseLeave={() => {
        handleStyle(-1000, 60, 0)
      }}
    >
      {multi && (
        <>
          <Styled.MenuItemLinkStyled>
            <Styled.LinkIconStyled>
              <NavIcon icon={icon} />
            </Styled.LinkIconStyled>
            <Styled.LinkTextStyled>{name}</Styled.LinkTextStyled>
            <Icon.ChevronDown />
          </Styled.MenuItemLinkStyled>
          <Styled.DropdownStyled style={style}>
            {submenu.map((item, index) => (
              <DropdownItem name={item.name} link={item.link} key={index} />
            ))}
          </Styled.DropdownStyled>
        </>
      )}
      {!multi && (
        <Styled.MenuItemLinkStyled href={link}>
          <Styled.LinkIconStyled>
            <NavIcon icon={icon} />
          </Styled.LinkIconStyled>
          <Styled.LinkTextStyled>{name}</Styled.LinkTextStyled>
        </Styled.MenuItemLinkStyled>
      )}
    </Styled.MenuItemStyled>
  )
}

function DropdownItem({ name, link }: DropdownProps) {
  return (
    <Styled.DropdownItemStyled>
      <Styled.DropdownItemLinkStyled href={link}>
        {name}
      </Styled.DropdownItemLinkStyled>
    </Styled.DropdownItemStyled>
  )
}

export { Navbar, MenuItem }
