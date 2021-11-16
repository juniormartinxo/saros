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
`

export { Grid, Head, Body, Row, Cell }
