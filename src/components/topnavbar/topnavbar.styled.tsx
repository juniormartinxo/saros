import styled from 'styled-components/macro'

const TopNavbarStyled = styled.nav`
  display: block;
`

const TopMenuStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 90%;
`

const TopMenuItemStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 200px;
  position: relative;
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

const TopSubMenuStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  border: 1px solid black;
  position: absolute;
  top: 100%;
  visibility: hidden;
`

const TopSubMenuItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`

const TopSubMenuItemLinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  margin: 0;
  font-size: 0, 8rem;
  color: black;
  cursor: pointer;
  text-decoration: none;
`

export {
  TopNavbarStyled,
  TopMenuStyled,
  TopMenuItemStyled,
  TopMenuItemLinkStyled,
  TopSubMenuStyled,
  TopSubMenuItemStyled,
  TopSubMenuItemLinkStyled,
}
