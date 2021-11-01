import { MainStyled } from './main.styled'
import { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

function Main({ children }: MainProps) {
  return <MainStyled>{children}</MainStyled>
}

export { Main }
