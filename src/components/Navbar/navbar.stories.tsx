import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navbar } from './navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Default = Template.bind({})
// Default.args = { children: 'Eu sou Main' }
