import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './styles/Button';
import Form from './styles/Form';
import axios from 'axios';
const FormWrapper = styled.div`
    width: 60%;
    flex-wrap: wrap;
    box-shadow: ${props => props.theme.bs};
    background-color: ${props => props.theme.offWhite};

`;

class DashboardForm extends Component {
  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/v1/${window.location.pathname}`)
      .then(res => {
        const firstName = res.data.first_name,
         id = res.data.id,
         email = res.data.email;
        this.setState({firstName, id, email})
      });
  };
  state = {
    firstName: '',
    email: '',
    password: '',
    id: ''
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
                placeholder={this.state.firstName}
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
                placeholder={this.state.email}
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
