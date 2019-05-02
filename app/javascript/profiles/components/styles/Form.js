import styled from 'styled-components';

const Form = styled.form`
  height: 100%;
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  line-height: 1.5;
  font-weight: 600;
  button {
  }
  label {
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid ${props => props.theme.darkGray};
    display: block;
    padding: 0.5rem;
  }
  button {
    margin-left: 0;
  }
`;

export default Form;
