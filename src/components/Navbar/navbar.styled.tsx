import styled from 'styled-components/macro'

const transitionStart = '0.2s'
const transitionEnd = '0.3s'

const NavbarStyled = styled.nav`
  display: block;
  background-color: #d9ead7;
`

const MenuStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0 auto;
  width: 90%;
`

const MenuItemLinkStyled = styled.a`
  padding: 15px 0;
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
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  top: 58px;
  left: -5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

const MenuItemStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 200px;
  position: relative;

  /*
  &:hover {
    ${DropdownStyled} {
      top: 48px;
      transition: ${transitionStart} linear top;
    }
  }
  */
`

const DropdownItemStyled = styled.li`
  padding: 0;
  margin: 0;
`

const DropdownItemLinkStyled = styled.a`
  display: block;
  padding: 15px 10px;
  font-size: 0.8rem;
  color: black;
  cursor: pointer;
  text-decoration: none;
  text-align: left;
  transition: ${transitionEnd} linear background-color;

  &:hover {
    color: #fff;
    background-color: #157968;
    transition: ${transitionStart} linear background-color;
  }
`

export {
  NavbarStyled,
  MenuStyled,
  MenuItemStyled,
  MenuItemLinkStyled,
  DropdownStyled,
  DropdownItemStyled,
  DropdownItemLinkStyled,
}