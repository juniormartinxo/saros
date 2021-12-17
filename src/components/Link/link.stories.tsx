import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react'
import { Link } from './link'
import LinkStyled from './link.styled'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import 'resources/styles/style.css'
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

const LinkTemplate: ComponentStory<typeof Link> = (args) => {
  const { children } = args
  return <Link {...args}>{children}</Link>
}

export const LinkTeachers = LinkTemplate.bind({})
LinkTeachers.args = {
  children: 'professores',
  to: '/professor',
  target: '_blank',
}

export const LinkUsers = LinkTemplate.bind({})
LinkUsers.args = { children: 'usuários', to: '/users' }

/*
export const Default: ComponentStory<typeof Link> = () => {
  return <Link to="/professor">Sou um link</Link>
}
*/
