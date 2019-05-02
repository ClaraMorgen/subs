import React  from 'react';
import Button from './styles/Button';
import styled from 'styled-components';

import DashboardForm from './DashboardForm';
import DashboardPass from './DashboardPass';
const BottomWrap = styled.div`
  display: flex;
  flex-grow: 3;

`;
const DashboardBottom = () =>   {
    return (
      <BottomWrap>
        <DashboardForm/>
        <DashboardPass />
      </BottomWrap>
    );
};

export default DashboardBottom;
