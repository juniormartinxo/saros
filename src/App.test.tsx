import { Header } from './components/Header'
import GlobalStyle from './resources/global-style'
import { App } from './App'

test('renders learn react link', () => {
  expect(App()).toEqual(
    <>
      <GlobalStyle />
      <Header />
    </>,
  )
})
