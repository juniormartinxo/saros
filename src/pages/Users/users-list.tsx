import * as Grid from 'resources/styles/grid.styled'
import { Container } from 'components/Container'

function UsersList() {
  return (
    <Container>
      <Grid.Grid>
        <Grid.Head>
          <Grid.Row>
            <Grid.Cell align="center">First Name</Grid.Cell>
            <Grid.Cell align="center">Last Name</Grid.Cell>
            <Grid.Cell align="center">Email</Grid.Cell>
            <Grid.Cell />
          </Grid.Row>
        </Grid.Head>
        <Grid.Body>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <button type="button">editar</button>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <button type="button">editar</button>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <button type="button">editar</button>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <button type="button">editar</button>
            </Grid.Cell>
          </Grid.Row>
        </Grid.Body>
      </Grid.Grid>
    </Container>
  )
}

export { UsersList }
