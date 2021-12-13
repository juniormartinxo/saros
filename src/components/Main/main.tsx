import { ReactNode } from 'react'
import { MainStyled } from './main.styled'

type MainProps = {
  children: ReactNode
}

function Main({ children }: MainProps) {
  return <MainStyled role="main">{children}</MainStyled>
}

export { Main }
