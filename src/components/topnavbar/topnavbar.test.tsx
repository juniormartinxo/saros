import { TopNavbar } from './topnavbar'

describe('TopNavbar', () => {
  it('deve retornar o TopNavbar', () => {
    expect(TopNavbar()).toEqual(
      <nav>
        <ul>
          <li key={1}>
            <a href="/">Página inicial</a>
          </li>
          <li key={2}>
            <a href="/">Sobre</a>
          </li>
          <li key={3}>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>,
    )
  })
})
