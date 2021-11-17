import * as Grid from 'resources/styles/grid.styled'
import { Container } from 'components/Container'

function SubjectsList() {
  return (
    <Container>
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
              <Grid.Link type="button" href="/disciplina/5">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.Link type="button" href="/disciplina/1">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.Link type="button" href="/disciplina/2">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.Link type="button" href="/disciplina/3">
                editar
              </Grid.Link>
            </Grid.Cell>
          </Grid.Row>
        </Grid.Body>
      </Grid.Grid>
    </Container>
  )
}

export { SubjectsList }
