import { Header } from './components/header'
import GlobalStyle from './resources/global-style'
import { App } from './app'

test('renders learn react link', () => {
  expect(App()).toEqual(
    <>
      <GlobalStyle />
      <Header />
    </>,
  )
})
