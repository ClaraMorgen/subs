import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './styles/Button';
const Profile = styled.div`
    flex-grow: 1;
`;

const H1Prof = styled.h1`
  padding: 1rem 2rem;
`;

const ParProf = styled.p`
  padding: 1rem 2rem;
`;


class DashboardProfilePassword extends Component {
  render() {
    return (
      <Profile>
        <H1Prof>Your Profile</H1Prof>
        <ParProf>Please be sure to enter correct information!</ParProf>
        <Button>Change Password</Button>
      </Profile>
    );
  }
}

export default DashboardProfilePassword;
