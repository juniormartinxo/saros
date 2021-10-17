import styled from 'styled-components/macro'

const NavbarStyled = styled.nav`
  display: block;
`

const MenuStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 90%;
`

const MenuItemStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 200px;
  position: relative;
`

const MenuItemLinkStyled = styled.a`
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

const DropdownStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  border: 1px solid black;
  position: absolute;
  :100% ;
`

const SubMenuItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`

const SubMenuItemLinkStyled = styled.a`
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
  NavbarStyled,
  MenuStyled,
  MenuItemStyled,
  MenuItemLinkStyled,
  DropdownStyled,
  SubMenuItemStyled,
  SubMenuItemLinkStyled,
}
