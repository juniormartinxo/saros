// import { useState } from 'react'
import * as Styled from './navbar.styled'
import { Navbar, MenuItem } from './navbar'
// import { NavIcons } from '../NavIcons'
import { Logo } from '../Logo'
import { menuItems } from './menuItems'
import { screen, render } from '@testing-library/react'

describe('Navbar', () => {
  it('deve retornar o Navbar', () => {
    expect(Navbar()).toEqual(
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
      </Styled.NavbarStyled>,
    )
  })

  it('O MenuItem deve ser', () => {
    render(
      <MenuItem
        name="Dashboard"
        link="/"
        icon="home"
        multi={false}
        submenu={[]}
      />,
    )

    expect(screen.getByRole('a')).toHaveTextContent('Dashboard')
  })
})

test('O menu tem que ser este', () => {
  expect(menuItems).toEqual([
    {
      name: 'Dashboard',
      link: '/',
      icon: 'home',
      multi: false,
      submenu: [],
    },
    {
      name: 'Cadastros',
      link: '/',
      icon: 'add-list',
      multi: true,
      submenu: [
        {
          name: 'Usuários',
          link: '/usuarios',
        },
        {
          name: 'Professores',
          link: '/professores',
        },
        {
          name: 'Disciplinas',
          link: '/disciplinas',
        },
        {
          name: 'Turmas',
          link: '/turmas',
        },
      ],
    },
    {
      name: 'Configurações',
      link: '/',
      icon: 'cog-line',
      multi: true,
      submenu: [
        {
          name: 'Matriz curricular',
          link: '/matriz',
        },
        {
          name: 'Quadro de horários',
          link: '/quadro-horario',
        },
      ],
    },
  ])
})
