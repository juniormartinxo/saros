import styled from 'styled-components/macro'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

export { Container, Form, Input }
