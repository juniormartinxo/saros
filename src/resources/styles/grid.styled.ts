import styled from 'styled-components/macro'

const Grid = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  background-image: none;
`

const Head = styled.thead`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`

const Body = styled.tbody`
  background-color: ${(props) => props.theme.grid.tbodyBg};
  color: ${(props) => props.theme.grid.tbodyColor};
`

const Row = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme.grid.trNthChildEvenBg};
    color: ${(props) => props.theme.grid.trNthChildEvenColor};
  }
`

const Cell = styled.td`
  padding: 0.5rem;
  text-align: ${(props) => props.align};
  text-align: center;
`

const CellAction = styled.td`
  width: 200px;
  padding: 0.5rem;
  text-align: ${(props) => props.align};
  text-align: center;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 15px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  width: 100%;
  margin-bottom: 15px;
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  margin: 0;
`

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

const borderRadius = '3px'

const ButtonActs = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border: none;
  border-radius: ${borderRadius};
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(120%);
  }
`

const ButtonEdit = styled(ButtonActs)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`

const ButtonDelete = styled(ButtonActs)`
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.white};
`
const ButtonNew = styled(ButtonActs)`
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.white};
`

const ButtonList = styled(ButtonActs)`
  background-color: ${(props) => props.theme.colors.info};
  color: ${(props) => props.theme.colors.white};
`

export {
  Grid,
  Head,
  Body,
  Row,
  Cell,
  CellAction,
  Header,
  Title,
  ContainerButtons,
  ButtonEdit,
  ButtonDelete,
  ButtonNew,
  ButtonList,
}
