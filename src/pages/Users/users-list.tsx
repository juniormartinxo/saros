import * as Grid from 'resources/styles/grid.styled'
import { Container } from 'components/Container'

function UsersList() {
  return (
    <Container>
      <h2>Usuários</h2>
      <Grid.Grid>
        <Grid.Head>
          <Grid.Row>
            <Grid.Cell>First Name</Grid.Cell>
            <Grid.Cell>Last Name</Grid.Cell>
            <Grid.Cell>Email</Grid.Cell>
            <Grid.Cell />
          </Grid.Row>
        </Grid.Head>
        <Grid.Body>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.Link type="button" href="/usuario/5">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.Link type="button" href="/usuario/1">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.Link type="button" href="/usuario/2">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.Link type="button" href="/usuario/3">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
        </Grid.Body>
      </Grid.Grid>
    </Container>
  )
}

export { UsersList }
