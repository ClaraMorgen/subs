import React, { Component } from 'react';
import styled from 'styled-components';
const Profile = styled.div`
    height: 25%;
    box-shadow: ${props => props.theme.bs};
    background-color: ${props => props.theme.offWhite};
    margin-bottom: 1rem;

`;

const H1Prof = styled.h1`
  padding: 1rem 2rem;
`;

const ParProf = styled.p`
  padding: 1rem 2rem;
`;


class DashboardProfile extends Component {
  render() {
    return (
      <Profile>
        <H1Prof>Your Profile</H1Prof>
        <ParProf>Please be sure to enter correct information!</ParProf>
      </Profile>
    );
  }
}

export default DashboardProfile;
