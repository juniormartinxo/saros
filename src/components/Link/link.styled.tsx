import styled from 'styled-components/macro'

const LinkStyled = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
`

export default LinkStyled
