import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { DefaultTheme } from 'styled-components'

import light from 'resources/styles/themes/light'
import dark from 'resources/styles/themes/dark'

type Response = [DefaultTheme, Dispatch<SetStateAction<DefaultTheme>>]

function useTheme(): Response {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem('theme')

    return storageValue === 'dark' ? dark : light
  })

  useEffect(() => {
    localStorage.setItem('theme', state.title)
  }, [state])

  return [state, setState]
}

export { useTheme }
