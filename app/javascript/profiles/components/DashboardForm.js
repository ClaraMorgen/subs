import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './styles/Button';
const FormWrapper = styled.div`
    flex-grow: 1.5;
    flex-wrap: wrap;
`;
const Form = styled.form`
  align-items: center;
  display: flex;
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
    display: block;
    padding: 0.5rem;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.winterWizard};
    }
  }
`;
class DashboardForm extends Component {
  state = {
    firstName: '',
    email: '',
    password: '',
  };
  handleChange = (e) => {
    // I take the target of the form and destructure it to take out
    // name, type and value (console.log e.target to see what's going on :) )
    //  console.log(e.target.value etc...)
    const { name, type, value } = e.target;
    // Then I set the state fo the name of whichever input is typed in
    // so if firstName = name of inout then.. firstName: value.. email: value
    this.setState({ [name]: value })
  }
  render() {
    return (
      <FormWrapper>
        <Form onSubmit={ e => {
          e.preventDefault();
          console.log(this.state);

        }
        }>
            <label htmlFor="firstName">
              First Name
              <input
                onChange={this.handleChange}
                type="text"
                id="firstName"
                name="firstName"
                placeholder=" Enrique"
                value= {this.state.firstName}
                required/>
            </label>
            <label htmlFor="email">
              Email
              <input
                onChange={this.handleChange}
                type="text"
                id="email"
                name="email"
                placeholder="susie@example.com"
                value= {this.state.email}
                required/>
            </label>
            <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default DashboardForm;
