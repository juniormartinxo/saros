import styled from 'styled-components/macro'

const TopNavbarStyled = styled.nav`
  display: block;
  background-color: antiquewhite;
`

const TopMenuStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`

const TopMenuItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`

const TopMenuItemLinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  margin: 0;
  font-size: 0, 8rem;
  color: black;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: red;
  }
`

export {
  TopNavbarStyled,
  TopMenuStyled,
  TopMenuItemStyled,
  TopMenuItemLinkStyled,
}
