import * as Grid from 'resources/styles/grid.styled'
import { Container } from 'components/Container'
import { IconEdit, IconUserPlus, IconDelete } from 'components/Icons'
import usersJson from 'users.json'
import { useState } from 'react'

type UserProps = {
  id: string
  firstName: string
  lastName: string
  email: string
}

function UsersList() {
  const [users, setUsers] = useState(usersJson.usuarios)

  function handleDelete(id: string) {
    setUsers(users.filter((user) => user.id !== id))
  }

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
          {users.map((user: UserProps) => (
            <Grid.Row key={user.id}>
              <Grid.Cell>{user.firstName}</Grid.Cell>
              <Grid.Cell>{user.lastName}</Grid.Cell>
              <Grid.Cell>{user.email}</Grid.Cell>
              <Grid.CellAction>
                <Grid.ContainerButtons>
                  <Grid.ButtonEdit
                    type="button"
                    href={`/usuario/e/${user.id}`}
                    title="Editar"
                  >
                    <IconEdit h={16} /> editar
                  </Grid.ButtonEdit>

                  <Grid.ButtonDelete
                    type="button"
                    title="Excluir"
                    onClick={() => handleDelete(user.id)}
                  >
                    <IconDelete h={16} /> excluir
                  </Grid.ButtonDelete>
                </Grid.ContainerButtons>
              </Grid.CellAction>
            </Grid.Row>
          ))}
        </Grid.Body>
      </Grid.Grid>
    </Container>
  )
}

export { UsersList }
