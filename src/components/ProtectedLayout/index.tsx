import { useAuth } from 'context/AuthProvider/useAuth'
// import { Login } from 'pages/Login'

type ProtectedLayoutProps = {
  children: JSX.Element
}

function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const auth = useAuth()

  if (!auth.email) {
    return <h1>Você não tem acesso!</h1>
  }

  return children
}

export { ProtectedLayout }
