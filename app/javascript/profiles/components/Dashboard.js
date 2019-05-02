import React, { Component } from 'react';
import styled from 'styled-components';
import DashboardProfile  from './DashboardProfile';
import DashboardBottom  from './DashboardBottom';
import Flash from '../../modules/Flashes/Flash';
const DashboardWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  height: 80vh;
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderR}

`;
class Dashboard extends Component {
  render() {
    return (
      <DashboardWrapper>
          <Flash />
          <DashboardProfile />
          <DashboardBottom />
      </DashboardWrapper>
    );
  }
}

export default Dashboard;
