import { LogoBox, LogoImg } from './logo-styled'
import LogoTimeSheet from './logo.svg'

function Logo() {
  function handleClick() {
    window.history.pushState(null, '', '/')
  }

  return (
    <LogoBox>
      <LogoImg
        src={LogoTimeSheet}
        alt="Timesheet"
        onClick={() => {
          handleClick()
        }}
      />
    </LogoBox>
  )
}

export { Logo }
