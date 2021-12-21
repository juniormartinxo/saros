import { ReactNode } from 'react'
import LinkStyled from './link.styled'

type LinkProps = {
  to: string
  target?: string
  skin?: string
  children: ReactNode
}

function Link({ to, target, skin, children }: LinkProps) {
  return (
    <LinkStyled href={to} target={target} skin={skin}>
      {children}
    </LinkStyled>
  )
}

export { Link }
