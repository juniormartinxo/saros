import * as Icon from 'resources/ui/icons'

type NavIconProps = {
  icon: String
}

function NavIcon({ icon }: NavIconProps) {
  switch (icon) {
    case 'home':
      return <Icon.Home />
    case 'calendar':
      return <Icon.Calendar />
    case 'chevron-down':
      return <Icon.ChevronDown />
    case 'add-list':
      return <Icon.AddList />
    case 'cog-line':
      return <Icon.CogLine />
    case 'settings':
      return <Icon.Settings />
    default:
      return <Icon.Home />
  }
}

export { NavIcon }
