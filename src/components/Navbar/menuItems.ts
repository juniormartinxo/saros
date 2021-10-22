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
    name: 'Configurações',
    link: '/',
    icon: 'cog-line',
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
]

export { menuItems }
