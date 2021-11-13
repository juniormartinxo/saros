import styled from 'styled-components/macro'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0 auto;
`

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 0.2rem;
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

const Errors = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 0.8rem;
  margin: 0.5rem;
`

const Button = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`

const Label = styled.label`
  font-size: 0.8rem;
  margin: 0.5rem;
  text-align: justify;
`

export { Container, Form, Input, Errors, Button, Label }
