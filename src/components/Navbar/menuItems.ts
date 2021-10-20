const menuItems = [
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
]

export { menuItems }
