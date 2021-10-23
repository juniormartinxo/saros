import styled from 'styled-components/macro'

const LogoBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const LogoImg = styled.span`
  height: 19px;
  color: ${(props) => props.theme.colors.secondary};

  svg {
    height: 20px;
    width: 119px;
  }
`

export { LogoBox, LogoImg }
