import React, { Component } from 'react';
import styled from 'styled-components';
import DashboardProfilePassword  from './DashboardProfilePassword';
import DashboardForm  from './DashboardForm';

const DashboardWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  background-color: ${props => props.theme.offWhite};
  height: 60vh;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.bs};
  border-radius: ${props => props.theme.borderR}

`;
class Dashboard extends Component {
  render() {
    return (
      <DashboardWrapper>
          <DashboardProfilePassword />
          <DashboardForm />
      </DashboardWrapper>
    );
  }
}

export default Dashboard;
