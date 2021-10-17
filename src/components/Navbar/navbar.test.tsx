import { NavbarStyled, MenuStyled, MenuItemStyled } from './navbar.styled'
import { Navbar, MenuItem } from './navbar'
import { Logo } from '../logo'
import { menuItems } from './menuItems'

test('O menu tem que ser este', () => {
  expect(menuItems).toEqual([
    {
      name: 'Dashboard',
      link: '/',
      multi: false,
      submenu: [],
    },
    {
      name: 'Cadastros',
      link: '/',
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
              name={item.name}
              link={item.link}
              submenu={item.submenu}
              multi={item.multi}
              key={index}
            />
          ))}
        </MenuStyled>
      </NavbarStyled>,
    )
  })
})
