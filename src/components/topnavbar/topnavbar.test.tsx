import {
  TopNavbarStyled,
  TopMenuStyled,
  TopMenuItemStyled,
} from './topnavbar-styled'
import { TopNavbar, TopMenuItem } from './topnavbar'
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

describe('TopNavbar', () => {
  it('deve retornar o TopNavbar', () => {
    expect(TopNavbar()).toEqual(
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
      </TopNavbarStyled>,
    )
  })
})
