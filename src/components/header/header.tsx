import { useContext } from 'react'
import { Navbar } from 'components/Navbar'
import Switch from 'react-switch'
import {
  ContainerHeaderStyled,
  HeaderStyled,
  TopbarStyled,
} from './header.styled'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

function Header({ toggleTheme }: any) {
  const { colors, title } = useContext(ThemeContext)

  return (
    <HeaderStyled role="header">
      <TopbarStyled>
        <ContainerHeaderStyled>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            // eslint-disable-next-line react/jsx-handler-names
            onColor={colors.primary}
          />
        </ContainerHeaderStyled>
      </TopbarStyled>
      <Navbar />
    </HeaderStyled>
  )
}

export { Header }
