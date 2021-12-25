import styled from 'styled-components/macro'

const borderRadius = '3px'

const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  border-radius: ${borderRadius};
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(120%);
  }

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

export { Link }
