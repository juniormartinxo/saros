import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as FormS from 'resources/styles/form.styled'

interface IFormInputs {
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

function Users() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <FormS.Form onSubmit={handleSubmit(onSubmit)}>
      <FormS.Container>
        <FormS.Input {...register('iptFirstName')} />
        <p>{errors.iptFirstName?.message}</p>
      </FormS.Container>

      <FormS.Container>
        <FormS.Input {...register('iptLastName')} />
        <p>{errors.iptLastName?.message}</p>
      </FormS.Container>

      <FormS.Container>
        <FormS.Input {...register('iptEmail')} />
        <p>{errors.iptEmail?.message}</p>
      </FormS.Container>

      <FormS.Container>
        <FormS.Input {...register('iptPassword')} />
        <p>{errors.iptPassword?.message}</p>
      </FormS.Container>

      <FormS.Container>
        <button type="submit">Enviar</button>
      </FormS.Container>
    </FormS.Form>
  )
}

export { Users }
