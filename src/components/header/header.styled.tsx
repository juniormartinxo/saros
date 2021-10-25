import styled from 'styled-components/macro'

const ContainerHeaderStyled = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
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
  background-color: ${(props) => props.theme.topbar.background};
`

export { ContainerHeaderStyled, HeaderStyled, TopbarStyled }
