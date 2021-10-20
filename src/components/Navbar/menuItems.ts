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
    icon: 'calendar',
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
]

export { menuItems }
