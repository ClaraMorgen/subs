import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './styles/Button';
import Form from './styles/Form';
const PassWrap = styled.div`
  background-color: ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  margin-left: 1rem;
  flex-grow: 1;
`;

class DashboardPass extends Component {
  state = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  handleChange = (e) => {
    // I take the target of the form and destructure it to take out
    // name, type and value (console.log e.target to see what's going on :) )
    //  console.log(e.target.value etc...)
    const { name, type, value } = e.target;
    // Then I set the state fo the name of whichever input is typed in
    // so if oldPassword = name of inout then.. firstName: value.. email: value
    this.setState({ [name]: value })
  }
  render() {
    return (
      <PassWrap>
        <Form onSubmit={ e => {
          e.preventDefault();
          console.log(this.state);

        }
        }>
            <label htmlFor="oldPassword">
              Old Password
              <input
                onChange={this.handleChange}
                type="text"
                id="oldPassword"
                name="oldPassword"
                placeholder=" Enrique"
                value= {this.state.oldPassword}
                required/>
            </label>
            <label htmlFor="newPassword">
              New Password
              <input
                onChange={this.handleChange}
                type="text"
                id="newPassword"
                name="newPassword"
                placeholder="susie@example.com"
                value= {this.state.newPassword}
                required/>
            </label>
            <label htmlFor="confirmPassword">
              Confirm Password
              <input
                onChange={this.handleChange}
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="susie@example.com"
                value= {this.state.confirmPassword}
                required/>
            </label>
            <Button type="submit">Submit</Button>
        </Form>
      </PassWrap>
    );
  }
}

export default DashboardPass;
