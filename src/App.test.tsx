import { Logo } from './components/logo'
import App from './App'

test('renders learn react link', () => {
  expect(App()).toEqual(
    <div className="App">
      <Logo />
    </div>,
  )
})
