import styled from 'styled-components/macro'

const ContainerHeaderStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const HeaderStyled = styled.header`
  margin: 0;
  padding: 0;
`

const TopbarStyled = styled.nav`
  display: block;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.background.topbar};
`

export { ContainerHeaderStyled, HeaderStyled, TopbarStyled }
