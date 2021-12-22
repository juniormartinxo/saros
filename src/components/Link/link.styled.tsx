import styled from 'styled-components/macro'

const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  padding: 0.5rem;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;

  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `
          background-color: ${props.theme.colors.primary};
          color: ${props.theme.colors.white};
        `
      case 'danger':
        return `
          background-color: ${props.theme.colors.danger};
          color: ${props.theme.colors.white};
        `
      case 'success':
        return `
          background-color: ${props.theme.colors.success};
          color: ${props.theme.colors.white};
        `
      default:
        return `
          background-color: transparent;
          color: ${props.theme.colors.primary};
        `
    }
  }}
`

export default LinkStyled
