import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as FormS from 'resources/ui/packages/form.styled'
import { Container } from 'components/Container'
import { useParams } from 'react-router-dom'
import { Link } from 'resources/ui/packages/link.styled'
import usersJson from 'users.json'

type FormInputsProps = {
  iptFirstName: string
  iptLastName: string
  iptEmail: string
}

const schema = yup
  .object({
    iptFirstName: yup.string().required('ops_1'),
    iptLastName: yup.string().required('ops_2'),
    iptEmail: yup.string().email().required('ops_3'),
  })
  .required()

function UsersEdit() {
  const { id } = useParams()
  const users = usersJson.usuarios

  const user = users.find((user) => user.id === id)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsProps>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormInputsProps) => console.log(data)

  return (
    <>
      <Container>
        <Link href="/usuarios" color="">
          Voltar
        </Link>
      </Container>
      <Container>
        <FormS.Form onSubmit={handleSubmit(onSubmit)}>
          <FormS.Container>
            <FormS.Label htmlFor="iptFirstName">Nome</FormS.Label>
            <FormS.Input
              {...register('iptFirstName', { value: user?.firstName })}
            />
            <FormS.Errors>{errors.iptFirstName?.message}</FormS.Errors>
          </FormS.Container>

          <FormS.Container>
            <FormS.Label htmlFor="iptLastName">Sobrenome</FormS.Label>
            <FormS.Input
              {...register('iptLastName', { value: user?.lastName })}
            />
            <FormS.Errors>{errors.iptLastName?.message}</FormS.Errors>
          </FormS.Container>

          <FormS.Container>
            <FormS.Label htmlFor="iptEmail">E-mail</FormS.Label>
            <FormS.Input {...register('iptEmail', { value: user?.email })} />
            <FormS.Errors>{errors.iptEmail?.message}</FormS.Errors>
          </FormS.Container>

          <FormS.Container>
            <FormS.Button type="submit">Enviar</FormS.Button>
          </FormS.Container>
        </FormS.Form>
      </Container>
    </>
  )
}

export { UsersEdit }
