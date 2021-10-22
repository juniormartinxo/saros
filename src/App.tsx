import { Header } from 'components/Header'
import { Container } from 'components/Container'
import GlobalStyle from 'resources/global-style'
import Routes from 'Routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Routes />
      </Container>
    </>
  )
}

export { App }
