import { ContainerStyled } from './container.styled'
import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <ContainerStyled data-testid="instance-container">
      {children}
    </ContainerStyled>
  )
}

export { Container }
