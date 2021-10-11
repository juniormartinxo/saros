import { header } from './header'

describe('header', () => {
  it('deve retorna header', () => {
    expect(header()).toEqual(
      <header>
        <h1>Header</h1>
      </header>,
    )
  })
})
