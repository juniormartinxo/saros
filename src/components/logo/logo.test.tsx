import { LogoImg } from './logo.styled'
import { Logo } from './logo'

import * as Icon from 'resources/ui/icons'

describe('header', () => {
  it('deve retornar o logo', () => {
    expect(Logo()).toEqual(
      <LogoImg>
        <Icon.Logo />
      </LogoImg>,
    )
  })
})
