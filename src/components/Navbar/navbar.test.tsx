import { menuItems } from './menuItems'
/*
import { render, screen } from '@testing-library/react'
import { Navbar } from './navbar'
*/

describe('Navbar', () => {
  it('render do Navbar', () => {
    // render(<Navbar />)
    // const link = screen.getByText(/Dashboard/i)
    // render(<Navbar menuItems={menuItems} />)
    // expect(link).toHaveTextContent('Dashboard')
    // fireEvent.mouseOver(link)
    // expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
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
      icon: 'settings',
      multi: true,
      submenu: [
        {
          name: 'Matriz curricular',
          link: '/matriz-curricular',
        },
        {
          name: 'Quadro de horários',
          link: '/quadro-horario',
        },
      ],
    },
  ])
})
