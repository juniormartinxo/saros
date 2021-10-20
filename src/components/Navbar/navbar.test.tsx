import { NavbarStyled, MenuStyled, MenuItemStyled } from './navbar.styled'
import { Navbar, MenuItem } from './navbar'
import { Logo } from '../Logo'
import { menuItems } from './menuItems'

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
      name: 'Quadro de horários',
      link: '/',
      icon: 'calendar',
      multi: false,
      submenu: [],
    },
  ])
})

describe('Navbar', () => {
  it('deve retornar o Navbar', () => {
    expect(Navbar()).toEqual(
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
      </NavbarStyled>,
    )
  })
})
