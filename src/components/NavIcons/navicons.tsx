import * as Icon from 'resources/ui/icons'

type NavIconsProps = {
  icon: String
}

function NavIcons({ icon }: NavIconsProps) {
  switch (icon) {
    case 'home':
      return <Icon.Home />
    case 'calendar':
      return <Icon.Calendar />
    case 'chevron-down':
      return <Icon.ChevronDown />
    case 'add-list':
      return <Icon.AddList />
    default:
      return <Icon.Home />
  }
}

export { NavIcons }
