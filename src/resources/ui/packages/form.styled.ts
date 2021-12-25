import styled from 'styled-components/macro'

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

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 0.2rem;
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`

const Errors = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const Label = styled.label`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  text-align: justify;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border: none;
  border-radius: ${(props) => props.theme.button.borderRadius};
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(120%);
  }
`

export { Container, Form, Input, Errors, Button, Label, ContainerButtons }
