import styled from 'styled-components/macro'

const handleSkin = (skin: string) => {
  switch (skin) {
    case 'primary':
      return `color: ${(props: { theme: { colors: { primary: any } } }) =>
        props.theme.colors
          .primary}; background-color: #007bff; border-color: #007bff;`
  }
}

const LinkStyled = styled.a<{ skin: string }>`
  /*color: ${(props) => props.theme.colors.primary};*/
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  ${(props) => handleSkin(props.skin)}
`

export default LinkStyled
