import * as Grid from 'resources/ui/packages/grid.styled'
import { Container } from 'components/Container'
import { IconEdit, IconUserPlus } from 'components/Icons'

function TeachersList() {
  return (
    <Container>
      <Grid.Header>
        <Grid.Title>Professores</Grid.Title>
        <Grid.ContainerButtons>
          <Grid.ButtonNew href="/professor/novo" title="Inserir novo">
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
                  href="/professor/e/1"
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
                  href="/professor/e/1"
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
                  href="/professor/e/1"
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
                  href="/professor/e/1"
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

export { TeachersList }
