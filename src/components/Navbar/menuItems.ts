const menuItems = [
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
]

export { menuItems }
