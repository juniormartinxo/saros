import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Main } from './main'

export default {
  title: 'Components/Main',
  component: Main,
} as ComponentMeta<typeof Main>

export const Default: ComponentStory<typeof Main> = () => {
  return <Main>Sou o Main sim</Main>
}
