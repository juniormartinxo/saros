import { Header } from 'components/Header'
import { Main } from 'components/Main'
import GlobalStyle from 'resources/styles/global'
import Routes from 'Routes'
import { ThemeProvider } from 'styled-components'
import { useTheme } from 'hooks/useTheme'

import light from 'resources/styles/themes/light'
import dark from 'resources/styles/themes/dark'

function App() {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Main>
        <Routes />
      </Main>
    </ThemeProvider>
  )
}

export { App }
