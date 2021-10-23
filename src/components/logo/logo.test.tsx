import { LogoImg } from './logo.styled'
import { Logo } from './logo'

describe('header', () => {
  it('deve retornar o logo', () => {
    expect(Logo()).toEqual(<LogoImg />)
  })
})
