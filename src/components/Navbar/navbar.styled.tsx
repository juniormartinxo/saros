import styled from 'styled-components/macro'

const transitionStart = '0.2s'
const transitionEnd = '0.3s'

const NavbarStyled = styled.nav`
  display: flex;
  background-color: #d9ead7;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`

const MenuStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0 auto;
  width: 90%;
`

const MenuItemLinkStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 15px 0;
  margin: 0;
  font-size: 0.9rem;
  color: #025d73;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  filter: brightness(1);
  transition: filter ${transitionEnd} linear;

  svg {
    height: 20px;
    padding: 0;
    align-self: center;
  }

  &:hover {
    color: #02718c;
    filter: brightness(1.2);
    transition: filter ${transitionStart} linear;
  }
`

const MenuItemStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 180px;
  position: relative;
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
    background-color: #02718c;
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
