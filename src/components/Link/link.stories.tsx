import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react'
import { Link } from './link'
import LinkStyled from './link.styled'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
// import { ThemeProvider } from 'styled-components'

import light from 'resources/styles/themes/light'
import dark from 'resources/styles/themes/dark'

const themes = [light, dark]
addDecorator(withThemesProvider(themes))

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [(story) => <LinkStyled>{story()}</LinkStyled>],
} as ComponentMeta<typeof Link>

export const Default: ComponentStory<typeof Link> = () => {
  return <Link to="/professor">Sou um link</Link>
}
