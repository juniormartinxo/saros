import { ReactNode } from 'react'
import LinkStyled from './link.styled'

type LinkProps = {
  to: string
  target?: string
  color: string
  children: ReactNode
}

function Link({ to, target, color, children }: LinkProps) {
  return (
    <LinkStyled href={to} target={target} color={color}>
      {children}
    </LinkStyled>
  )
}

export { Link }
