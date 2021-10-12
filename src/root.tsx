import { App } from 'app'
import GlobalStyle from 'resources/global-style'

import 'normalize.css'

function Root() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}

export { Root }
