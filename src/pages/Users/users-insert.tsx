import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as Form from 'resources/styles/form.styled'
import { Container } from 'components/Container'
import { IconSave } from 'components/Icons'
import { Link } from 'components/Link'

type IFormInputs = {
  iptFirstName: string
  iptLastName: string
  iptEmail: string
  iptPassword: string
}

const schema = yup
  .object({
    iptFirstName: yup.string().required('ops_1'),
    iptLastName: yup.string().required('ops_2'),
    iptEmail: yup.string().required('ops_3'),
    iptPassword: yup.string().required('ops_4'),
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

  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <Container>
      <Form.Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Container>
          <Form.Label htmlFor="iptFirstName">Nome</Form.Label>
          <Form.Input {...register('iptFirstName')} />
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
          <Form.Button type="submit">
            <IconSave h={16} /> Gravar
          </Form.Button>
          <Link to="/usuarios" color="primary">
            Voltar
          </Link>
        </Form.ContainerButtons>
      </Form.Form>
    </Container>
  )
}

export { UsersInsert }
