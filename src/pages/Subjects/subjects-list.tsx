import * as Grid from 'resources/styles/grid.styled'
import { Container } from 'components/Container'
import { IconEdit, IconUserPlus } from 'components/Icons'

function SubjectsList() {
  return (
    <Container>
      <Grid.Header>
        <Grid.Title>Disciplinas</Grid.Title>
        <Grid.ContainerButtons>
          <Grid.ButtonNew href="/disciplina/novo" title="Inserir novo">
            <IconUserPlus h={16} /> novo
          </Grid.ButtonNew>
        </Grid.ContainerButtons>
      </Grid.Header>
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
              <Grid.ContainerButtons>
                <Grid.ButtonEdit
                  type="button"
                  href="/disciplina/e/1"
                  title="Editar"
                >
                  <IconEdit h={16} /> editar
                </Grid.ButtonEdit>
              </Grid.ContainerButtons>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.ContainerButtons>
                <Grid.ButtonEdit
                  type="button"
                  href="/disciplina/e/1"
                  title="Editar"
                >
                  <IconEdit h={16} /> editar
                </Grid.ButtonEdit>
              </Grid.ContainerButtons>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.ContainerButtons>
                <Grid.ButtonEdit
                  type="button"
                  href="/disciplina/e/1"
                  title="Editar"
                >
                  <IconEdit h={16} /> editar
                </Grid.ButtonEdit>
              </Grid.ContainerButtons>
            </Grid.Cell>
          </Grid.Row>
          <Grid.Row>
            <Grid.Cell>Junior</Grid.Cell>
            <Grid.Cell>Martins</Grid.Cell>
            <Grid.Cell>amjr.box@gmail.com</Grid.Cell>
            <Grid.Cell>
              <Grid.ContainerButtons>
                <Grid.ButtonEdit
                  type="button"
                  href="/disciplina/e/1"
                  title="Editar"
                >
                  <IconEdit h={16} /> editar
                </Grid.ButtonEdit>
              </Grid.ContainerButtons>
            </Grid.Cell>
          </Grid.Row>
        </Grid.Body>
      </Grid.Grid>
    </Container>
  )
}

export { SubjectsList }
