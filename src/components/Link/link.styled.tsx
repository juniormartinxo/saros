import styled from 'styled-components/macro'

const handleSkin = (color: string) => {
  switch (color) {
    case 'primary':
      return `
      background-color: ${(props: { theme: { colors: { success: any } } }) =>
        props.theme.colors.success};
      color: ${(props: { theme: { colors: { white: any } } }) =>
        props.theme.colors.white};
      `
    case 'danger':
      return '#f56342'
    default:
      return '#fff'
  }
}

const LinkStyled = styled.a<{ color: string }>`
  /*color: ${(props) => props.theme.colors.primary};*/
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  ${(props) => handleSkin(props.color)}
`

export default LinkStyled
