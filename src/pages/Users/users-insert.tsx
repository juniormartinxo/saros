import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as Form from 'resources/ui/packages/form.styled'
import { Container } from 'components/Container'
import { IconSave, IconCancel } from 'components/Icons'
import { Link } from 'resources/ui/packages/link.styled'
import { Button } from 'resources/ui/packages/button.styled'

type IFormInputs = {
  iptFirstName: string
  iptLastName: string
  iptEmail: string
}

const schema = yup
  .object({
    iptFirstName: yup.string().required('O nome é obrigatório'),
    iptLastName: yup.string().required('O sobrenome é obrigatório'),
    iptEmail: yup.string().required('O email é obrigatório'),
  })
  .required()

function UsersInsert() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  // const onSubmit = (data: IFormInputs) => console.log(data)
  const onSubmit = (data: IFormInputs) => {
    console.log('data', data)
  }

  const onError = (error: any) => console.log('error', error)

  return (
    <Container>
      <Form.Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Container>
          <Form.Label htmlFor="iptFirstName">Nome</Form.Label>
          <Form.Input
            {...register('iptFirstName')}
            placeholder="Primeiro nome"
          />
          <Form.Errors>{errors.iptFirstName?.message}</Form.Errors>
        </Form.Container>

        <Form.Container>
          <Form.Label htmlFor="iptFirstName">Sobrenome</Form.Label>
          <Form.Input {...register('iptLastName')} />
          <Form.Errors>{errors.iptLastName?.message}</Form.Errors>
        </Form.Container>

        <Form.Container>
          <Form.Label htmlFor="iptFirstName">E-mail</Form.Label>
          <Form.Input {...register('iptEmail')} />
          <Form.Errors>{errors.iptEmail?.message}</Form.Errors>
        </Form.Container>

        <Form.ContainerButtons>
          <Button type="submit" color="primary">
            <IconSave h={16} /> Gravar
          </Button>

          <Link href="/usuarios" color="danger">
            <IconCancel h={16} /> Cancelar
          </Link>
        </Form.ContainerButtons>
      </Form.Form>
    </Container>
  )
}

export { UsersInsert }
