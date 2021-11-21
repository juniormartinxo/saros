import * as Grid from 'resources/styles/grid.styled'
import { Container } from 'components/Container'

// import * as Icon from 'resources/ui/icons'

import { IconEdit, IconUserPlus } from 'components/Icons'

function UsersList() {
  return (
    <Container>
      <Grid.Header>
        <Grid.Title>Usuários</Grid.Title>
        <Grid.ContainerButtons>
          <Grid.ButtonNew href="/usuario/novo" title="Inserir novo">
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
                  href="/usuario/e/1"
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
                  href="/usuario/e/2"
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
                  href="/usuario/e/3"
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
                  href="/usuario/e/4"
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

export { UsersList }
