import { Header } from 'components/Header'
import { Container } from 'components/Container'
import GlobalStyle from 'resources/styles/global'
import Routes from 'Routes'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { useTheme } from 'hooks/useTheme'

import light from './resources/styles/themes/light'
import dark from './resources/styles/themes/dark'

function App() {
  const [theme, setTheme] = useTheme<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  )
}

export { App }
