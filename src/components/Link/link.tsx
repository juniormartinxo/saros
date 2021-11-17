import { ReactNode } from 'react'
import LinkStyled from './link.styled'

type LinkProps = {
  to: string
  target?: string
  children: ReactNode
}

function Link({ to, target, children }: LinkProps) {
  return (
    <LinkStyled href={to} target={target}>
      {children}
    </LinkStyled>
  )
}

export { Link }
