import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as FormS from 'resources/ui/packages/form.styled'
import { Container } from 'components/Container'

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

function SubjectsInsert() {
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
      <FormS.Form onSubmit={handleSubmit(onSubmit)}>
        <FormS.Container>
          <FormS.Label htmlFor="iptFirstName">Nome</FormS.Label>
          <FormS.Input {...register('iptFirstName')} />
          <FormS.Errors>{errors.iptFirstName?.message}</FormS.Errors>
        </FormS.Container>

        <FormS.Container>
          <FormS.Label htmlFor="iptFirstName">Sobrenome</FormS.Label>
          <FormS.Input {...register('iptLastName')} />
          <FormS.Errors>{errors.iptLastName?.message}</FormS.Errors>
        </FormS.Container>

        <FormS.Container>
          <FormS.Label htmlFor="iptFirstName">E-mail</FormS.Label>
          <FormS.Input {...register('iptEmail')} />
          <FormS.Errors>{errors.iptEmail?.message}</FormS.Errors>
        </FormS.Container>

        <FormS.Container>
          <FormS.Button type="submit">Enviar</FormS.Button>
        </FormS.Container>
      </FormS.Form>
    </Container>
  )
}

export { SubjectsInsert }
