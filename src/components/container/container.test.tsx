import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { Container } from './container'
// import { ContainerStyled } from './container.styled'

describe('Container', () => {
  //   it('deve retornar o Container', () => {
  //     expect(Container()).toEqual(<ContainerStyled>arroz</ContainerStyled>)
  //   })

  it('should render', () => {
    render(
      <Container>
        <p>É um teste muito bacana</p>
      </Container>,
    )
    expect(screen.getByTestId('instance-container')).toHaveTextContent(
      'É um teste muito bacana',
    )
    // const children = jest.children
    // render(<Container>{children}</Container>)
    // expect(screen.getByRole('div')).toBeInTheDocument()
  })

  /*
  it('should render children', () => {
    render(<Container>Hello</Container>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
  */

  /*
    it('should render with className', () => {
        render(<Container className="test" />)
        expect(screen.getByTestId('container')).toHaveClass('test')
    })

    it('should render with style', () => {
        render(<Container style={{ color: 'red' }} />)
        expect(screen.getByTestId('container')).toHaveStyle('color: red')
    })

    it('should render with id', () => {
        render(<Container id="test" />)
        expect(screen.getByTestId('container')).toHaveAttribute('id', 'test')
    })

    it('should render with ref', () => {
        const ref = React.createRef<HTMLDivElement>()
        render(<Container ref={ref} />)
        expect(ref.current).toBeInTheDocument()
    })

    it('should render with onClick', () => {
        const onClick = jest.fn()
        render(<Container onClick={onClick} />)
        userEvent.click(screen.getByTestId('container'))
        expect(onClick).toHaveBeenCalled()
    })

    it('should render with onMouseEnter', () => {
        const onMouseEnter = jest.fn()
        render(<Container onMouseEnter={onMouseEnter} />)
        userEvent.mouseEnter(screen.getByTestId('container'))
        expect(onMouseEnter).toHaveBeenCalled()
    })

    it('should render with onMouseLeave', () => {
        const onMouseLeave = jest.fn()
        render(<Container onMouseLeave={onMouseLeave} />)
        userEvent.mouseLeave(screen.getByTestId('container'))
        expect(onMouseLeave).toHaveBeenCalled()
    })
    */
})
