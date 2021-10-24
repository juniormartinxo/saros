import styled from 'styled-components/macro'

const transitionStart = '0.2s'
const transitionEnd = '0.3s'

const NavbarStyled = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.background.navbar};
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
  justify-content: center;
  padding: 15px 0;
  margin: 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.fonts.colorPrimary};
  cursor: pointer;
  text-decoration: none;
  filter: brightness(1);
  transition: filter ${transitionEnd} linear;

  svg {
    height: 18px;
    padding: 0;
  }

  &:hover {
    color: ${(props) => props.theme.fonts.colorSecondary};
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
  background-color: ${(props) => props.theme.background.dropdown};
  box-shadow: ${(props) => props.theme.background.dropdownShadow} 0px 10px 15px -3px,
    ${(props) => props.theme.background.dropdownShadow} 0px 4px 6px -2px;
`

const DropdownItemStyled = styled.li`
  padding: 0;
  margin: 0;
`

const DropdownItemLinkStyled = styled.a`
  display: block;
  padding: 15px 10px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.fonts.colorPrimary};
  cursor: pointer;
  text-decoration: none;
  text-align: left;
  transition: ${transitionEnd} linear background-color;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    transition: ${transitionStart} linear background-color;
  }
`

const LinkIconStyled = styled.span`
  display: block;
`

const LinkTextStyled = styled.span`
  display: block;
  padding-left: 5px;
  font-size: 0.8rem;
`

export {
  NavbarStyled,
  MenuStyled,
  MenuItemStyled,
  MenuItemLinkStyled,
  DropdownStyled,
  DropdownItemStyled,
  DropdownItemLinkStyled,
  LinkIconStyled,
  LinkTextStyled,
}
