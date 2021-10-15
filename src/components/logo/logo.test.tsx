import { LogoImg } from './logo.styled'
import LogoTimeSheet from './logo.svg'
import { Logo } from './logo'

describe('header', () => {
  it('deve retornar o logo', () => {
    expect(Logo()).toEqual(<LogoImg src={LogoTimeSheet} alt="Timesheet" />)
  })
})
